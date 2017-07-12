'use strict';
this.right = null



function Hash(){
	this.table={};
	this.value=0;
};

Hash.prototype.insert = function(word){
	
	if(!this.table[word]){
		this.table[word] = 1;
	}
};


Hash.prototype.search = function(word){

	if(!this.table[word]){
		return 'word not in table';
	}

	if(this.table[word]){
		return 'Word in table';
	}
};

let HashTable = new Hash();

HashTable.insert('Bob');
HashTable.insert('Alice');
HashTable.insert('Larry');

console.log(HashTable.table);
console.log(HashTable.search('Julius'));
console.log(HashTable.search('Bob'));