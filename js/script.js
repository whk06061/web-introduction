function alertGuest() {
  alert(
    getGuestName() + "님, 저와 " + getCheckedCnt() + "개의 취향이 같으시네요!"
  );
}

function getGuestName() {
  return document.getElementById("name").value;
}

function getCheckedCnt() {
  return document.querySelectorAll("input[name='movies']:checked").length;
}
