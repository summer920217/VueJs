const app = new Vue({
  el:'#app',
  data:{
    list:[
      {id:1,name:'《算法寻轮》',date:'2006-9',price:85.00,count:1},
      {id:2,name:'《UNIX编程艺术》',date:'2006-2',price:59.00,count:1},
      {id:3,name:'《编程珠玑》',date:'2006-10',price:39.00,count:1},
      {id:4,name:'《代码大全》',date:'2006-3',price:128.00,count:1},
    ]
  },
  computed:{
    totalPrice(){
      // 方式1：
      /*
      let totalPrice = 0;
      for(let i=0;i< this.list.length;i++){
        totalPrice += this.list[i].price*this.list[i].count;
      }
      return totalPrice;
      */

      // 方式2：
      /*
      let totalPrice = 0;
      for(let i in this.list){
        const book = this.list[i];
        totalPrice += book.price * book.count;
      }
      return totalPrice;
      */

      // 方式3：
      let totalPrice = 0;
      for(let item of this.list){
        totalPrice += item.price * item.count;
      }
      return totalPrice;




    }
  },
  methods:{
    // getFinalPrice(price){
    //   return price.toFixed(2)
    // }
    // 减1
    decrement(index){
      this.list[index].count--;
    },
    // 加1
    increment(index){
      this.list[index].count++;
    },
    // 移除
    removeHandle(index){
      this.list.splice(index,1)
    }

  },
  filters:{//过滤器
    showPrice(price){
      return price.toFixed(2)
    }
  }
})


