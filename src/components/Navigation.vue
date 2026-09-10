<template>
  <header class = "navbar">
    <div class = "logo">
      <img src = "@/assets/randomlogo.png" alt="logo" />
     
      <div>
        <h2> R Trading </h2>
        <p> SCIENTIA ET FIDES </p>
      </div>
    </div>

    <nav>
      <a href="/"> Home </a>
      <a href="/about"> About </a>
      <a href="/admissions"> Admissions </a>
      <a href="/academics"> Academics </a>
      <a href="/campus-life"> Campus Life </a>
      <a href="/news"> News </a>
      <a href="/contact"> Contact </a>

      <button>Portal Login </button>
    </nav>
  </header>
</template>

<style scoped>
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  font-family:Arial, Helvetica, sans-serif;
}

.navbar{
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding:20px 60px;
  background:#f9f5ef;
  margin-left: 120px;
  margin-right: 120px;
  border-bottom: 1px solid rgba(43, 26, 82, 0.1);
}

.logo{
  display:flex;
  align-items:center;
  gap:17px;
}

.logo img{
  width:70px;
}

.logo h2{
  color:#2b1a52;
  font-size:30px;
  margin-bottom: 1px;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}

.logo p{
  color:#b8912a;
  letter-spacing:3px;
  font-size:12px;
  font-weight: 1000;
}

nav{
  display:flex;
  align-items:center;
  gap:30px;
}

nav a{
  text-decoration:none;
  color:#2b1a52;
  font-weight:500;
  cursor:pointer;
  font-weight: 700;
}

.user-icon{
  width: 25px;
  height: 16px;
  object-fit: contain;
  font-weight: 1000;

}

.home {
  color:#2b1a52;
  border-bottom:3px solid #c8a100;
  padding-bottom:5px;
  
}

button{
  display: flex;
  align-items: center;
  gap: 8px;
  background: linear-gradient(135deg, #2b1a52 0%, #43277a 100%);
  color:#fff;
  padding:12px 24px;
  border:none;
  border-radius:6px;
  cursor:pointer;
  font-weight: 700;
}
</style>