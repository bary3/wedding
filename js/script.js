let dNama = [];
let dUcapan = [];

const tombolAdd = document.querySelector(".tes");
const form = document.getElementById("myForm");
const userTR = document.querySelector(".userTR");
const inputData = document.querySelectorAll(".form-control");

function start() {
  if (localStorage.length < 2) {
    myFunc();
  } else {
    Read();
  }
}

function myFunc() {
  myFunc = function () {}; // kill it as soon as it was called
  localStorage.setItem("nama", JSON.stringify(dNama));
  localStorage.setItem("ucapan", JSON.stringify(dUcapan));
}

tombolAdd.addEventListener("click", (e) => {
  e.preventDefault;
  tes();
  Read();
});

function tes() {
  let nama = document.getElementById("nama").value;
  let ucapan = document.getElementById("ucapan").value;

  let sNama = JSON.parse(localStorage.getItem("nama"));
  let sUcapan = JSON.parse(localStorage.getItem("ucapan"));

  if (nama == "" || ucapan == "") {
    //infoAddData("tidak");
  } else {
    if (sNama == "" || dNama.length == 0) {
      dNama.push(nama);
      dUcapan.push(ucapan);

      localStorage.setItem("nama", JSON.stringify(dNama));
      localStorage.setItem("ucapan", JSON.stringify(dUcapan));
      //infoAddData("belum");
      //inputClear();
    } else {
      dNama = JSON.parse(localStorage.getItem("nama"));
      dUcapan = JSON.parse(localStorage.getItem("ucapan"));

      for (let i = 0; i < dNama.length; i++) {
        if (nama == dNama[i]) {
          infoAddData("sudah");
          return;
        } else if (i == dNama.length - 1) {
          dNama.push(nama);
          dUcapan.push(ucapan);
          //infoAddData("belum");

          localStorage.setItem("nama", JSON.stringify(dNama));
          localStorage.setItem("ucapan", JSON.stringify(dUcapan));
          //inputClear();
          return;
        }
      }
    }
  }
}

function Read() {
  userTR.innerHTML = "";
  dNama = JSON.parse(localStorage.getItem("nama"));
  dUcapan = JSON.parse(localStorage.getItem("ucapan"));
  if (dNama != null) {
    for (let i = 0; i < dNama.length; i++) {
      userTR.innerHTML += `
      <div class='comment-2'>
      <div class='comment-3'>${dNama[i]}</div>
      <div class='comment-4'>${dUcapan[i]}<</div>
      </div>
      `;
    }
  }
}

// function deleteData(user) {
//   Read();
//   let tombolHapus = document.querySelectorAll(".delete");
//   let tombolEdit = document.querySelectorAll(".edit");
//   let sure = document.querySelectorAll(".sure");

//   tombolEdit[user].innerHTML = `<button class="mt-2 btn btn-danger ">Yes</button>`;
//   tombolHapus[user].innerHTML = `<button class="mt-2 btn btn-secondary " >No</button>`;
//   sure[user].innerHTML = `<h6 style = "font-weight : bold;"> You sure to delete this ? </h6>`;

//   tombolEdit.forEach((pilYes) => {
//     pilYes.addEventListener("click", function () {
//       sure;
//       dUsername = JSON.parse(localStorage.getItem("username"));
//       dNama = JSON.parse(localStorage.getItem("nama"));
//       dEmail = JSON.parse(localStorage.getItem("email"));
//       dJurusan = JSON.parse(localStorage.getItem("jurusan"));

//       dUsername.splice(user, 1);
//       dNama.splice(user, 1);
//       dEmail.splice(user, 1);
//       dJurusan.splice(user, 1);

//       localStorage.setItem("username", JSON.stringify(dUsername));
//       localStorage.setItem("nama", JSON.stringify(dNama));
//       localStorage.setItem("email", JSON.stringify(dEmail));
//       localStorage.setItem("jurusan", JSON.stringify(dJurusan));

//       Read();
//     });
//   });

tombolHapus.forEach((pilNo) => {
  pilNo.addEventListener("click", function () {
    Read();
  });
});

// function edit(user) {
//   Read();

//   let tombolHapus = document.querySelectorAll(".delete");
//   let tombolEdit = document.querySelectorAll(".edit");

//   tombolEdit[user].innerHTML = `<button class="mt-2 btn btn-danger ">Cancel</button>`;
//   tombolHapus[user].innerHTML = `<button class="mt-2 btn btn-secondary " >Save</button>`;

//   const infoValid = document.querySelectorAll(".infoValid");
//   const eUsername = document.querySelectorAll(".eusername");
//   const eNama = document.querySelectorAll(".enama");
//   const eEmail = document.querySelectorAll(".eemail");
//   const eJurusan = document.querySelectorAll(".ejurusan");

//   let Newusername = JSON.parse(localStorage.getItem("username"));
//   let Newnama = JSON.parse(localStorage.getItem("nama"));
//   let Newemail = JSON.parse(localStorage.getItem("email"));
//   let Newjurusan = JSON.parse(localStorage.getItem("jurusan"));

//   eUsername[user].innerHTML = `<h6 class="card-title eusername">Username: <input type="text" class="form-control newusername"  placeholder="New Username" value = "${dUsername[user]}" id = "newusername" /> </h6>`;
//   eNama[user].innerHTML = `<h6 class="card-title eusername">Nama: <input type="text" class="form-control newnama"  placeholder="New Username" value = "${dNama[user]}" id = "newnama" /> </h6>`;
//   eEmail[user].innerHTML = `<h6 class="card-title eusername">Email: <input type="text" class="form-control newemail"  placeholder="New Username" value = "${dEmail[user]}" id = "newemail" /> </h6>`;
//   eJurusan[user].innerHTML = `<h6 class="card-title eusername">Jurusan: <input type="text" class="form-control newjurusan"  placeholder="New Username" value = "${dJurusan[user]}"  id = "newjurusan"/> </h6>`;

//   tombolHapus[user].addEventListener("click", function () {
//     Newusername[user] = document.getElementById("newusername").value;
//     Newnama[user] = document.getElementById("newnama").value;
//     Newemail[user] = document.getElementById("newemail").value;
//     Newjurusan[user] = document.getElementById("newjurusan").value;

//     if (Newusername[user] == "" || Newnama[user] == "" || Newemail[user] == "" || Newjurusan[user] == "") {
//       infoValid[user].innerHTML = `<div class="alert alert-danger">Data Harus terisi semua!</div>`;
//     } else {
//       localStorage.setItem("username", JSON.stringify(Newusername));
//       localStorage.setItem("nama", JSON.stringify(Newnama));
//       localStorage.setItem("email", JSON.stringify(Newemail));
//       localStorage.setItem("jurusan", JSON.stringify(Newjurusan));

//       Read();
//     }
//   });

//   tombolEdit[user].addEventListener("click", function () {
//     Read();
//   });
// }

function infoAddData(valid) {
  if (valid == "sudah") {
    var text = "Username Sudah Ada";
    var alert = "alert-warning";
  } else if (valid == "belum") {
    var text = "Data berhasil ditambahkan!";
    var alert = "alert-primary";
  } else if (valid == "tidak") {
    var text = "Pastikan data terisi semua!";
    var alert = "alert-danger";
  }

  const info = document.querySelector(".info");
  info.innerHTML = `
 	<div class="alert ${alert} infoadd">
 		<p>${text}</p>
 		<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
 	</div>
 	`;

  timeoutInfo();
}

var inputClear = function () {
  inputData.forEach((input) => (input.value = ""));
};

function timeoutInfo() {
  setTimeout(function () {
    let alert = document.querySelectorAll(".alert");

    alert.forEach(function (pilInfo) {
      pilInfo.remove();
    });
  }, 5000);
}
