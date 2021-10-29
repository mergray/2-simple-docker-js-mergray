const Books = {
    data() {
      return {
            "books":[],
            "offers":[],
            "offerForm":{},
            selectedOffer: null
         }
    },
    computed:  {},
    methods: {
       
        fetchBookData(s) {
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
    
    },

    postOffer(evt) {
      if (this.selectedOffer === null) {
          this.postNewOffer(evt);
      } else {
          this.postEditOffer(evt);
      }
    },

    postNewOffer(evt){
        console.log("Posting:", this.offerForm);
        alert("Posting!");

       fetch('api/books/create.php', {

           method:'POST',

           body: JSON.stringify(this.offerForm),

           headers: {

             "Content-Type": "application/json; charset=utf-8"

           }

         })

         .then( response => response.json())
         .then( json => {

           console.log("Returned from post:", json);

           // TODO: test a result was returned!

           this.books = json;

           // reset the form

           this.offerForm = {};

         });

     },

    postEditOffer(evt) {
      this.offerForm.id = this.selectedOffer.id;
        
      
      console.log("Updating!", this.offerForm);

      fetch('api/books/update.php', {
          method:'POST',
          body: JSON.stringify(this.offerForm),
          headers: {
            "Content-Type": "application/json; charset=utf-8"
          }
        })
        .then( response => response.json() )
        .then( json => {
          console.log("Returned from post:", json);
          // TODO: test a result was returned!
          this.books = json;

          this.resetofferForm = {};
         
        });
    },
    postDeleteOffer(o) {
      if (!confirm("Are you sure you want to delete the offer from "+o.companyName+"?")) {
          return;
      }
      
      fetch('api/books/delete.php', {
          method:'POST',
          body: JSON.stringify(o),
          headers: {
            "Content-Type": "application/json; charset=utf-8"
          }
        })
        .then( response => response.json() )
        .then( json => {
          console.log("Returned from post:", json);
          // TODO: test a result was returned!
          this.books = json;
          
          this.resetOfferForm();
        });
    },

    selectOffer(o) {
      this.selectedOffer = o;
      console.log(this.selectedOffer);
      this.offerForm = Object.assign({}, this.selectedOffer);
    },
    resetOfferForm() {
      this.selectedOffer = null;
      this.offerForm = {};
    }
},

    created() {
        this.fetchBookData();
    }
  }
  
  Vue.createApp(Books).mount('#booksApp');
  