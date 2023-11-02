<template>
  <div class="hero">
    <video autoplay loop muted plays-inline class="back-video">
      <source src="assets/videofundo.mp4" type="video/mp4" />
    </video>

    <nav>
      <ul>
        <li><a href="#">HOME</a></li>
        <li><a href="#">VENDAS</a></li>
        <li><a href="#">CRM</a></li>
      </ul>
    </nav>

    <div class="content">
      <h1>California</h1>
      <a href="#"> Acesse </a>
    </div>
  </div>
</template>

<script></script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "poopins", sans-serif;
}
.hero {
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(rgba(12, 3, 51, 0.3), rgba(123, 51, 0.3));
  position: relative;
  padding: 0 5%;
  display: flex;
  align-content: center;
  justify-content: center;
}

nav {
  
  position: absolute;
  top: 0;
  left: 0;
  padding: 20px 8%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

nav.hero {
  width: 180px;
}

nav ul li {
  list-style: none;
  display: inline-block;
  margin-left: 40px;
}

nav ul li a {
  text-decoration: none;
  color: white;
  font-size: 17px;
}

.content {
  text-align: center;
}
.content h1 {
  font-size: 160px;
  color: #fff;
  font-weight: 600;
  margin-top: 350px;
}

.content a {
  text-decoration: none;
  display: inline-block;
  color: #fff;
  font-size: 24px;
  border: 2px solid #fff;
  padding: 14px 70px;
  border-radius: 50px;
  margin-top: 50px;
}

.back-video {
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: -1;
  width: 100%;
}
</style>
