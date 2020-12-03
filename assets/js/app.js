document.getElementById('button').addEventListener('click', getName);
    document.getElementById('getForm').addEventListener('submit', getName);
    document.getElementById('postForm').addEventListener('submit', postName);

    function getName(e){
      e.preventDefault();

      var name = document.getElementById('name1').value;

      var xhr = new XMLHttpRequest();
      xhr.open('GET', 'process.php?name='+name, true);

      xhr.onload = function(){
        console.log(this.responseText);
      }

      xhr.send();
    }


    function postName(e){
      e.preventDefault();

      var name = document.getElementById('name2').value;
      var params = "name="+name;

      var xhr = new XMLHttpRequest();
      xhr.open('POST', 'process.php', true);
      xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

      xhr.onload = function(){
        console.log(this.responseText);
      }

      xhr.send(params);
    }