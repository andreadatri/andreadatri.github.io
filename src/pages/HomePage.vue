<template>
  <div class="ciop centered">
    <h1>Home Page</h1>
    <p>This is the Home page of our site.</p>
    <div class="boxes">
      <div class="box">
        <h2>Example Box 1</h2>
        <div class="overlay">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
      <div class="box">
        <h2>Example Box 2</h2>
        <div class="overlay">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
      <div class="box">
        <h2>Example Box 3</h2>
        <div class="overlay">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage'
}
</script>

<style scoped>
.centered {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
}

.boxes {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.box {
  position: relative;
  border: 1px solid #000;
  width: 200px;
  height: 200px;
  background-color: #fff;
  overflow: hidden;
}

.box h2 {
  margin: 0;
  padding: 10px;
  background-color: #f0f0f0;
  text-align: center;
}

.overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  height: 100%;
  transform: translateY(100%);
  transition: transform 0.3s ease-out;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 10px;
}

.box:hover .overlay {
  transform: translateY(0);
}
</style>