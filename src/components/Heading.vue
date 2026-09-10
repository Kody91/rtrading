<template>
  <section class= "hero">
    <div class= "lefttext">
    <h4> ——— ESTABLISHED 1905 </h4>
      <h1>
        Exemplary <i>Christian</i>
        <br>
        Education for Life.
      </h1>
      <br><div class= "line1" > </div>

      <p>
        A leading Christian institution in the Philippines,
         <br>University nurtures intellectual
        growth and spiritual<br> development through a commitment
        to <b>Scientia et Fides</b> <br>(Science and Faith).
      </p>

      <div class= "buttons">
        <button class= "b1">
          Explore Academics
        </button>

        <button class= "b2">
          Request Information
        </button>
      </div>
      
      <div class="card1">
        <div class="stats">
        <h2>118+</h2>
        <p>Years of Excellence</p>
        </div>
        <div class="stats">
        <h2>20+</h2>
        <p>Academic Progress</p>
      </div>
      <div class="stats">
        <h2>5,000+</h2>
        <p>Active Students</p>
      </div>
      <div class="stats">
        <h2>20+</h2>
        <p>Partner institution</p>
      </div>
      </div>
    </div>

    <div class= "right">

      <div class= "card">

        <img src= "@/assets/randomlogo.png" alt="logo">

        <h2>R TRADING</h2>

        <h4> SCIENTIA ET FIDES </h4>

        <p> "A Heritage of Excellence,<br> A Future of Faith" </p>

      </div>

    </div>

  </section>
</template>

<style scoped>
.hero{
  display:flex;
    justify-content:space-between;
    align-items:center;
    padding:70px 60px;
    background: linear-gradient(135deg, #fdfaf6 0%, #f6f0e8 100%);
    margin-left: 120px;
    margin-right: 120px;
  min-height: 50vh;
  gap: 40px;
  border-radius: 18px;
}


.lefttext{
  flex: 1 1 50%;
  min-width: 0;
}

.lefttext h4{
    color:#b8912a;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight:795;
    margin-bottom: -25px;

}

.lefttext h1{
    font-size:60px;
    color:#2b1a52;
    line-height:50px;
    margin-bottom:5px;
}

.lefttext p{
    font-size:22px;
    line-height:30px;
    color:#2b1a52;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.lefttext i{
    color:#c8a100;
}

.buttons{
    margin-top:35px;
    display:flex;
    gap:20px;
}

.b1{
    background: #fcc634;
    color:#f9f5ef;
    padding:18px 30px;
    border:none;
    border-radius:6px;
    cursor:pointer;
    font-weight: bold;
    box-shadow: 0 8px 18px rgba(43, 26, 82, 0.2);
}

.b2{
    background: linear-gradient(135deg, #f9f5ef 0%, #f4e7bb 100%);
    border:2px solid #c8a100;
    padding:18px 30px;
    border-radius:7px;
    cursor:pointer;
    color: #2b1a52;
    font-weight: bold;
    box-shadow: 0 8px 18px rgba(200, 161, 0, 0.12);
}

.right{
  flex: 1 1 40%;
  min-width: 0;
    position:relative;
    display:flex;
    justify-content:center;
}



.card{
    position:relative;
    background: linear-gradient(135deg, #f5d56b 0%, #e8b73a 18%, #e8e1f8 52%, #f9f5ef 100%);
    width:100%;
    max-width:850px;
    min-height:500px;
    border-radius:15px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    box-shadow:0 8px 20px rgba(43, 26, 82, 0.2);
    border: 1px solid rgba(200,161,0,0.35);

}

.card1{
    margin-top:20px;
    grid-template-columns: repeat(4, 1fr);
  width: min(720px, 100%);
  min-height: 120px;
  height: auto;
    border-radius:12px;
    display:grid;
    background: rgba(255,255,255,0.9);
    box-shadow:0 8px 20px rgba(43, 26, 82, 0.14);
    border: 1px solid rgba(200,161,0,0.25);

}

.stats p{
    margin-top: 10px;
    text-align: center;
    font-size: 15px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 600;
}

.stats {
  position: relative;
    text-align: center;
}

.stats:not(:last-child)::after {
  position: absolute;
  top: 25%;
  right: 0;
  width: 1px;
  height: 50%;
  background: #e2e8f0;
  content: '';
}

.stats h2 {
  
    color: #2b1a52;
    font-size: 25px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

}

.card img{
    width:120px;
    margin-bottom:-10px;
}

.card h2{
    text-align:center;
    font-size:45px;
    color:#34136d;
    font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;

}

.card h4{
    margin-top:-25px;
    color:#8d7318;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    letter-spacing: 4px;
}

.line0{
    width:50px;
    height:2px;
    background:#C8A100;
 
}

.line1{

    width:70px;
    height:2px;
    background:#C8A100;
   
}

.card p{
    font-weight:450;
    font-size:20px;
    text-align:center;
    font-style:italic;
    color:#34136d;
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

@media (max-width: 1100px) {
  .hero {
    margin-left: 40px;
    margin-right: 40px;
    padding: 50px 35px;
  }

  .lefttext h1 {
    font-size: 48px;
    line-height: 1.05;
  }

  .lefttext p {
    font-size: 18px;
    line-height: 1.5;
  }
}

@media (max-width: 800px) {
  .hero {
    flex-direction: column;
    align-items: stretch;
    margin: 0;
    padding: 40px 24px;
  }

  .lefttext,
  .right {
    width: 100%;
  }

  .right {
    order: -1;
  }

  .card {
    min-height: 360px;
  }

  .card1 {
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
  }

  .stats:nth-child(2)::after {
    display: none;
  }
}

@media (max-width: 480px) {
  .lefttext h1 {
    font-size: 38px;
  }

  .lefttext p {
    font-size: 16px;
  }

  .buttons {
    flex-direction: column;
  }

  .card1 {
    grid-template-columns: 1fr;
  }

  .stats::after {
    display: none;
  }
}


</style>