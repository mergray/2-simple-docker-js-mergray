
const Books = {
    data() {
      return {
            "books":[],
        }
    },
    computed:  {},
    methods: {
       
        fetchBooksData(s) {
            console.log("Fetching books for", s);
            fetch('/api/books/')
            .then(response => response.json())
            .then((parsedJson) => {
                console.log(parsedJson);
                this.books = parsedJson
            })
            .catch( err => {
                console.error(err)
            })
        }
    },
    created() {
        this.fetchBooksData();
    }
  }
  
  Vue.createApp(Books).mount('#booksApp');
  