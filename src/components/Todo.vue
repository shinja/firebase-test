<template>
    <div>
        <input type="text" v-model="text" />
        <button @click="submit">Submit</button>
        <div class="company" v-for="(todo, index) in todos" :key="index">{{todo.content}}</div>
    </div>
</template>

<script>
import db from "@/database";

export default {
    data() {
        return {
            text: "",
            todos: []
        };
    },

    methods: {
        submit() {
            if (this.text) {
                db.collection("todos")
                    .add({ content: this.text, status: 0 })
                    .then(() => {
                        this.text = "";
                    })
                    .catch(() => {
                    });
            }
        }
    },
    firestore() {
        return {
            todos: db.collection("todos")
        };
    }
};
</script>
