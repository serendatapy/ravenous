const apiKey =
  "ML1cR-iiw1Jv9qjqXnvUIS-gBkZTtQ98AT4J--FSUnPRqaK6C8-W3AApHP8fVX4MsQ6znPZS6KKyX5t9c0wgQVd1yUFD2_0TflmhGTQlW6XLWGkrIJ8Q0L6XD4gxX3Yx";

const yelp = {

  search(term, location, sortBy) {
    let myHeader = new Headers();
    myHeader.append("Authorization", `Bearer ${apiKey}`);

    var requestOptions = {
      method: 'GET',
      headers: myHeader,
      redirect: 'follow'
    };

    return fetch(
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sortBy=${sortBy}`,
      requestOptions)
      .then(response => {return response.json()})
      .then(jsonResponse => {

        if(jsonResponse.businesses){

          return jsonResponse.businesses.map(
            business => {
              return {
                id: business.id,
                imageSrc: business.image_url,
                name: business.name,
                address: business.location.address1,
                city: business.location.city,
                zipCode: business.location.zip_code,
                category: business.categories[0].title,
                rating: business.rating,
                reviewCount: business.review_count,
              }
            }
          )
        }
      }
    ).catch(error => console.log('Gracefully Handle ERRORS:',error));
  }
}

export default yelp;
