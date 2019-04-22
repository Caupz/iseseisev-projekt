let saerchBtn = document.querySelector("#book-search");
let zanrAdd = document.querySelector("#zanr");
let zanrValue = document.querySelector("#zanr-name");
let jarjehoidja = document.querySelector("#jarjehoidja");
let zanrTabs = document.querySelector("#zanr-tabs");

let zanrs = JSON.parse(localStorage.getItem("zanrs"));
let books = JSON.parse(localStorage.getItem("books"));

if(!zanrs.some(item => item.name === 'Loetud')) {
	AddToZanrs("loetud", "Loetud");
}

if(zanrs === null || zanrs === undefined) { zanrs = []; }
if(books === null || books === undefined) { books = []; }

console.log(zanrs);
console.log(books);

if(zanrAdd !== null && zanrAdd !== undefined) {
	zanrAdd.addEventListener("click", function() {
		let zanrId = zanrValue.value.replace(/[^a-z0-9]/gi,'');
		// kontroll kas juba on olemas.
		CreateZanr(zanrId, zanrValue.value);
		AddToZanrs(zanrId, zanrValue.value);
	});
}
if(saerchBtn !== null && saerchBtn !== undefined) {
	saerchBtn.addEventListener("click", Search);
}

function CreateZanr(zanrId, zanrName) {
	let existingBlock = document.querySelector("#zanr-"+zanrId);
	if(existingBlock !== null && existingBlock !== undefined) {
		alert("Selline zanr on juba olemas!");
		return;
	}
	
	HideZanrs();

	// põhi kontainerid jms
	let zanrBlock = document.createElement("div");
	zanrBlock.classList.add("zanr");
	zanrBlock.classList.add("active");
	zanrBlock.id = "zanr-"+zanrId;
	let zanrLabel = document.createElement("span");
	zanrLabel.innerText = zanrName;
	let booksContainer = document.createElement("div");
	booksContainer.class = "books";
	
	let booksTable = document.createElement("table");
	let bookThead = document.createElement("thead");
	let bookTr = document.createElement("tr");
	let bookTh = document.createElement("th");
	bookTh.innerText = "Raamatu nimi";
	bookTr.appendChild(bookTh);
	bookTh = document.createElement("th");
	bookTh.innerText = "Lehekülg";
	bookTr.appendChild(bookTh);
	bookTh = document.createElement("th");
	bookTh.innerText = "LK Kokku";
	bookTr.appendChild(bookTh);
	bookTh = document.createElement("th");
	bookTh.innerText = "Lühikirjeldus";
	bookTr.appendChild(bookTh);
	bookTh = document.createElement("th"); // btnite jaoks
	bookTr.appendChild(bookTh);
	bookThead.appendChild(bookTr);
	booksTable.appendChild(bookThead);
	let bookTbody = document.createElement("tbody");
	booksTable.appendChild(bookTbody);
	booksContainer.appendChild(booksTable);
	
	// Raamatu lisamise inputid.
	let bookName = document.createElement("input");
	bookName.type = "text";
	bookName.className = "book-title";
	bookName.placeholder = "Raamatu nimi";
	let bookLk = document.createElement("input");
	bookLk.className = "book-lk";
	bookLk.placeholder = "Leheküljel";
	bookLk.type = "number";
	let bookLkTotal = document.createElement("input");
	bookLkTotal.className = "book-lk";
	bookLkTotal.placeholder = "LK Kokku";
	bookLkTotal.type = "number";
	let bookDesc = document.createElement("input");
	bookDesc.className = "book-desc";
	bookDesc.placeholder = "Lühikirjeldus";
	bookDesc.type = "text";
	let bookAdd = document.createElement("input");
	bookAdd.type = "button";
	bookAdd.value = "Lisa raamat";
	let br = document.createElement("br");
	zanrLabel.classList.add("active");
	
	// Raamatu lisamine
	bookAdd.addEventListener("click", function() {
		if(bookLk.value > bookLkTotal.value) {
			alert("Lehekülgede kogus on suurem kui raamatus lehekülgede arv kokku!");
			return;
		}
		CreateBook(bookName.value, bookLk.value, bookLkTotal.value, bookDesc.value, bookTbody, books.length);
		AddToBooks(zanrId, bookName.value, bookLk.value, bookLkTotal.value, bookDesc.value);
		
		bookName.value = "";
		bookLk.value = "";
		bookLkTotal.value = "";
		bookDesc.value = "";
	});
	
	// Zanri ja selle tabi aktiveerimine
	zanrLabel.addEventListener("click", function() {
		HideZanrs();
		zanrBlock.classList.add("active");
		zanrLabel.classList.add("active");
	});
	
	let inputContainer = document.createElement("div");
	inputContainer.className = "book-inputs-container";
	zanrTabs.appendChild(zanrLabel);
	inputContainer.appendChild(bookName);
	inputContainer.appendChild(bookLk);
	inputContainer.appendChild(bookLkTotal);
	inputContainer.appendChild(bookDesc);
	inputContainer.appendChild(bookAdd);
	zanrBlock.appendChild(inputContainer);
	
	zanrBlock.appendChild(booksContainer);
	jarjehoidja.appendChild(zanrBlock);
}

function AddToBooks(zanrId, bookTitle, bookPage, bookPagesTotal, bookDescription) {
	let book = {"zanr":zanrId, "name":bookTitle, "lk":bookPage, "lkTotal":bookPagesTotal, "description":bookDescription};
	books.push(book);
	localStorage.setItem("books", JSON.stringify(books));
}

function AddToZanrs(zanrId, zanrName) {
	let zanr = {"id":zanrId, "name":zanrName};
	zanrs.push(zanr);
	localStorage.setItem("zanrs", JSON.stringify(zanrs));
}

function CreateBook(bookTitle, bookPage, bookPagesTotal, bookDescription, tbody, bookIndex) {
	if(bookPagesTotal === undefined || bookPagesTotal === null) {
		bookPagesTotal = 0;
	}
	
	let bNameContainer = document.createElement("td");
	let bName = document.createElement("input");
	bName.value = bookTitle;
	bName.id = "book-name-"+bookIndex;
	bName.type = "text";
	bNameContainer.appendChild(bName);
	let bLkContainer = document.createElement("td");
	let bLk = document.createElement("input");
	bLk.value = bookPage;
	bLk.id = "book-lk-"+bookIndex;
	bLk.type = "text";
	bLkContainer.appendChild(bLk);
	let bLkTotalContainer = document.createElement("td");
	let bLkTotal = document.createElement("input");
	bLkTotal.value = bookPagesTotal;
	bLkTotal.id = "book-lk-total-"+bookIndex;
	bLkTotal.type = "text";
	bLkTotalContainer.appendChild(bLkTotal);
	let bDescContainer = document.createElement("td");
	let bDesc = document.createElement("input");
	bDesc.value = bookDescription;
	bDesc.id = "book-desc-"+bookIndex;
	bDesc.type = "text";
	bDescContainer.appendChild(bDesc);
	let bBtnContainer = document.createElement("td");
	let bEdit = document.createElement("input");
	bBtnContainer.appendChild(bEdit);
	bEdit.type = "button";
	bEdit.value = "✏️";
	bEdit.addEventListener("click", function() {
		if(bLk.value > bLkTotal.value) {
			alert("Lehekülgede kogus on suurem kui raamatus lehekülgede arv kokku!");
			return;
		}
		
		books[bookIndex].name = bName.value;
		books[bookIndex].lk = bLk.value;
		books[bookIndex].lkTotal = bLkTotal.value;
		books[bookIndex].description = bDesc.value;
		localStorage.setItem("books", JSON.stringify(books));
	});
	let bDelete = document.createElement("input");
	bBtnContainer.appendChild(bDelete);
	bDelete.type = "button";
	bDelete.value = "🗑️";
	bDelete.addEventListener("click", function() {
		books.splice(bookIndex, 1);
		localStorage.setItem("books", JSON.stringify(books));
		RenderBooks();
	});
	let bRow = document.createElement("tr");
	
	let bDone = document.createElement("input");
	bBtnContainer.appendChild(bDone);
	bDone.type = "button";
	bDone.value = "✔️";
	bDone.addEventListener("click", function() {
		bRow.parentElement.removeChild(bRow);
		books[bookIndex].zanr = "loetud";
		localStorage.setItem("books", JSON.stringify(books));
		
		let tbodyElement = document.querySelector("#zanr-loetud table tbody");
		CreateBook(bookTitle, bookPage, bookPagesTotal, bookDescription, tbodyElement, bookIndex);
	});
	
	bRow.className = "book zanr-book-row-"+bookIndex;
	bRow.appendChild(bNameContainer);
	bRow.appendChild(bLkContainer);
	bRow.appendChild(bLkTotalContainer);
	bRow.appendChild(bDescContainer);
	bRow.appendChild(bBtnContainer);
	tbody.appendChild(bRow);
}

function RenderZanrs() {
	for(let i = 0, zanr; zanr = zanrs[i]; i++) {
		CreateZanr(zanr.id, zanr.name);
	}
}

function DeleteAllBookDOMs() {
	let buuks = document.querySelectorAll(".book");
	for(let i = 0, b; b = buuks[i]; i++) {
		b.parentElement.removeChild(b);
	}
}

function RenderBooks() {
	DeleteAllBookDOMs();
	for(let i = 0, book; book = books[i]; i++) {
		let tbodyElement = document.querySelector("#zanr-"+book.zanr+" table tbody");
		CreateBook(book.name, book.lk, book.lkTotal, book.description, tbodyElement, i);
	}
}

function HideZanrs() {
	let zanrs = document.querySelectorAll(".zanr");
	for(let i = 0, zanr; zanr = zanrs[i]; i++) {
		if(zanr.classList.contains("active")) {
			zanr.classList.remove("active");
		}
	}
	
	let tabs = document.querySelectorAll("#zanr-tabs span");
	for(let i = 0, tab; tab = tabs[i]; i++) {
		if(tab.classList.contains("active")) {
			tab.classList.remove("active");
		}
	}
}

function Search() {
	let allBooks = document.querySelectorAll(".book");
	
	let searchVal = document.querySelector("#book-name-search").value;
	if(searchVal.length <= 0) {
		alert("Sisesta otsingukasti enne mida otsida...");
		// Kui varem midagi otsiti, aga kui nüüd pandi otisngusse mitte midagi, siis kuvame kõike uuesti.
		for(let i = 0, book; i < allBooks.length; i++) {
			allBooks[i].style.display = "table-row";
		}
		return;
	}
	
	// Peidame kõik ära.
	for(let i = 0, book; i < allBooks.length; i++) {
		allBooks[i].style.display = "none";
	}
	
	// Määrame nähtavaks mis sisaldavad otsingusõna.
	for(let i = 0; i < books.length; i++)
	{
		if(books[i].name.includes(searchVal))
		{
			let el = document.querySelector(".zanr-book-row-"+i);
			if(el !== undefined && el !== null) {
				el.style.display = "table-row";
			}
		}
	}
}

(function() {
   RenderZanrs();
   RenderBooks();
})();
