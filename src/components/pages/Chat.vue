<script>
import { defineComponent, reactive } from 'vue'
import View from '../chat/View.vue' // 追加
import Send from '../chat/Send.vue'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getDatabase, ref, push, onValue } from "firebase/database";


export default defineComponent({
  components: {
    View,
    Send
  },
  setup() {
    const data = reactive({
      user: {},
      chat: [],
      input: '',
      displayName: ''
    })
    data.user = getAuth().currentUser;
    const refMessage = ref(getDatabase(), 'chat'); // 追加

    onValue(refMessage, (snapshot) => {
    const data = snapshot.val();
    updateChat(data);
    });

    const pushMessage = (chatData) => {
     chatData.uid = data.user.uid // 追加
     //data.chat.push(chatData)
     const db = getDatabase();
     push(ref(db, 'chat'), chatData);
    };

    return {
      data,
      pushMessage
    }
    const updateChat = (snap) => {
     data.chat = [];
     for (const key in snap) {
       data.chat.push({
        message: snap[key].message,
        uid: snap[key].uid,
        displayName: snap[key].displayName
       })
     }
    }
  },
  beforeRouteEnter: (to, from, next) => {
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      next();
    } else {
      next('/login');
    }
  });
}
});
</script>

<template>
  <div class="container">
    <View :data="data" />
    <Send @sendMessage="pushMessage" />
  </div>
</template>

<style scoped>

</style>