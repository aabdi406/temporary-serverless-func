const result = document.querySelector('.result')

const fetchData = async () => {
   try {

    //1.destructure the data
      const { data } = await axios.get('/api/2-basic-api')
      
      //2.Iterate over the products
      const products = data.map((product) => {
        //3. Extract the items we want to display
        const {image: {url}, name,price} = product

        //4. Display the items using HTML tags
        return `<article class="product">
        <img src="${url}"alt="${name}"/>
        <div class="info">
          <h5>${name}</h5>
          <h5 class="price">$${price}</h5>
        </div>
      </article`
      //5. Join the items with empty space
      }).join('')
      //6. Display the products on the page using "result" div
      result.innerHTML = products

   } catch (error) {
      result.innerHTML = `<h4>There was an error, please try agin later</h4>`
   }
}

fetchData()


