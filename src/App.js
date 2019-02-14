const app = new Vue({
   
    el: '#app',
    data: {
        title: 'Vue ToDoList',
        tasks: [],
        newTask: ''
    },
    methods:{
        addTasks(){
            this.tasks.push({
                name: this.newTask,
                state: false
            });
            this.newTask = '';
        },
        taskEdit(index){
            console.log("hello ", index);
            this.tasks[index].state = true
        },
        deleteTask(index) {
            this.tasks.splice(index, 1);
        }
    }

});