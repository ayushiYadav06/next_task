import axios from "axios";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [query, setQuery] = useState('');

  const [gifs, setGifs] = useState([]);

  const searchGifs = async (query:any) => {
    try {
      const apiKey = 'D3IujnGvF3FO0suKUWmpjMJqhNkH7lCb';
      const response = await fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${apiKey}&limit=10`);
      
      if (response.ok) {
        const data = await response.json();
        setGifs(data.data); // Assuming data.data contains the array of GIFs

      } else {
        throw new Error('Failed to fetch GIFs');
      }
    } catch (error) {
      console.error('Error fetching GIFs:', error);
    }
  };

  return (
    <div>
      <style jsx>{`

        .custom-input {
          /* Change text color */
          color: #333; /* Replace with your desired text color */
        
          /* Change background color */
          background-color: #F2F4F8;

          /* Other styling */
          border: 1px solid #ccc;
          padding: 8px;
          border-radius: 4px;
        }

        .custom-input {
          /* Change text color */
          color: #333; /* Replace with your desired text color */
        
          /* Change background color */
          background-color: #f5f5f5; /* Replace with your desired background color */
        outline:none
          /* Other styling */
          border: 1px solid #ccc;
          padding: 8px;
          border-radius: 4px;
        }

        .body{
          margin: 0px;
          padding: 0px;
         
      }
      .box{
          display: flex;
          gap: 10px;
          justify-content: center;
      
      }
      .card {
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.4);
        transition: 0.3s;
        width: 25%;
      }
      
      .card:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.4);
      }
      
      .container {
        padding: 3px 20px;
      }
      .button{
          display: flex;
         justify-content: center;
          list-style-type: none;
      
      } 
      
      a {
        text-decoration: none;
        display: inline-block;
        padding: 8px 16px;
      }
      
      a:hover {
        background-color: #ddd;
        color: black;
      }
         
      `}</style>

      <div className="container">
        <nav>
          <div
            style={{
              display: "flex",
              margin: " 70px 250px",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                borderRadius: "20px",
                padding: "24px",
                backgroundColor: "#F5F5F5",
              }}
            >
              <input 
                type="text"
                placeholder="&#128269; Articles name and keywords ..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}        
                className="custom-input"
                style={{
                  padding: "0.5rem",
                  marginRight: "0.5rem",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                  width: "642px",
                  height: "70px",
                  gap: "10px",
                }}
              />
              <button onClick={searchGifs}
                style={{
                  padding: "0.5rem",
                  backgroundColor: "black",
                  color: "white",
                  borderRadius: "12px",
                  outline: "none",
                  width: "110px",
                  height: "74px",
                }}
              >
                Search
              </button>
            </div>

          </div>
        </nav>
        <div>

<div className ="box">
<div className="card">
     
      {gifs.map((gif) =>{
        return( 
          <>
          <img src=`{gif.embed_url }` alt="Avatar" style={{width:"100%" }} />
          <div className="container">
            <h4><b>{gif.username}</b></h4> 
            <p>{gif.title}</p> 
          </div>
          </>
      
        )
      })

      }
  <img src="cardimage1.jpg" alt="Avatar" style={{width:"100%" }} />
  <div className="container">
    <h4><b>John Doe</b></h4> 
    <p>Architect & Engineer</p> 
  </div>
</div>

</div>
      </div>

      </div>
      
    </div>
  );
};

export default Dashboard;
