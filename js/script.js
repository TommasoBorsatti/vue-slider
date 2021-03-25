
const App = new Vue (

  {
    el: "#root",

    data: {

      pics: [
        "img/pic9.jfif",
        "img/pic11.jpg",
        "img/pic6.webp",
      ],

      picIndex: 0,


    },

    methods: {

      next: function() {
        this.picIndex ++;
        if (this.picIndex == this.pics.length) {
          this.picIndex = 0;
        }
      },

      prev: function() {
        this.picIndex --;
        if (this.picIndex < 0) {
          this.picIndex = this.pics.length-1;
        }
      },

    },


  }
);
