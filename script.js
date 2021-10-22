 //Javascript Code for Logo generator website


 //Script for responsive navbar
 const toggleButton = document.getElementsByClassName('toggle')[0]
 const navbarLinks = document.getElementsByClassName('navbar-links')[0]

 toggleButton.addEventListener('click',()=>{
   navbarLinks.classList.toggle('active')
 })




//Script for Logo Creation and Download
  document.getElementById("college-name").addEventListener('input', (e) => {
      let college_name_thingy = document.getElementsByClassName("college-name");
      college_name_thingy.forEach(thingy => thingy.innerHTML = e.target.value);
      update();
  });
  let update = (first = false) => {
      let svgviews = document.getElementsByClassName("svg-view");
      svgviews.forEach(view => {
          const canvas = view.getElementsByTagName("canvas")[0];
          const svg = view.getElementsByTagName("svg")[0];
          if (first) {
              const buttonJPG = view.getElementsByTagName("button")[1];
              const buttonPNG = view.getElementsByTagName("button")[0];
              buttonJPG.addEventListener('click', () => {
                  var image = canvas.toDataURL("image/jpeg");
                  let tmp = document.createElement('a');
                  tmp.download = "dsclogo.jpeg";
                  tmp.href = image;

                  document.body.appendChild(tmp);
                  tmp.click();
                  document.body.removeChild(tmp);
              });
              buttonPNG.addEventListener('click', () => {
                var image = canvas.toDataURL("image/png");
                let tmp = document.createElement('a');
                tmp.download = "dsclogo.png";
                tmp.href = image;

                document.body.appendChild(tmp);
                tmp.click();
                document.body.removeChild(tmp);
            });
          }
          const ctx = canvas.getContext('2d');
          v = canvg.Canvg.fromString(ctx, svg.outerHTML);
          v.start();
      });
  };
  update(true);