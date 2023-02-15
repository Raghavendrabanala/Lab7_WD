
let pageAccessCount = localStorage.getItem("pageAccessCount");
if (pageAccessCount === null) {
  pageAccessCount = 1;
} 
else {
  pageAccessCount = parseInt(pageAccessCount) + 1;
}

localStorage.setItem("pageAccessCount", pageAccessCount);

console.log(`You have accessed this page ${pageAccessCount} time(s).`);