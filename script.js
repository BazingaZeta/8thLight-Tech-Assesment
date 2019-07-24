/*global document, $, console, event, results */

function bookSearch() {                          //function triggered by button
    /* eslint-disable no-console */
    event.preventDefault();                      //preventing auto refresh of the page
    //console.log("This function is working.");  //console.log to see if the function was running properly

    var search = document.getElementById('book').value; //storing the value of search
    document.getElementById('results').innerHTML = '';  
    //console.log(search);                       //console.log to see "search" in console 
    
    $.ajax({
        
        url: "https://www.googleapis.com/books/v1/volumes?q=" + search + "&startIndex=0&maxResults=40&key=AIzaSyCOBbymaad4eBVNFVF5JC-Pc0TQzE6AHOw", //linking API + our search
        //-------------^this increments the number of results returned. default 10
        dataType: "json",
        
        success: function(data) {
            console.log(data)
            //var results = document.getElementById('results');  //creating variable results
            
            //var title,authors, publisher,link,thumbNail,isbn = ''; //variables to use in results.innerHTML
            
            for (i = 0 ; i < data.items.length ; i++ ) {
                         //-------------^loop runs as much as the lenght of items
                title = data.items[i].volumeInfo.title;              //storing informations to display
                authors = data.items[i].volumeInfo.authors;
                link = data.items[i].volumeInfo.infoLink;
                thumbNail = data.items[i].volumeInfo.imageLinks.smallThumbnail;
                publisher = data.items[i].volumeInfo.publisher;
                isbn = data.items[i].volumeInfo.industryIdentifiers[0].identifier;
                
                results.innerHTML += "<h2>" + title + "</h2>" +      //writing the results returned 
                "<h3>By: " + authors + "</h3>" + 
                "<h3>Published by: " + publisher + "</h3>" + 
                "<a href=" + link +'"><img src="'+ thumbNail + '"></a>' +
                "<h4>ISBN " + isbn + "</h4>" +    
                "<hr><br>"
       
            }  
        },
        
    type: "GET"
           
    })
 
}
