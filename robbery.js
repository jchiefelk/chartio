'use strict';

function Node(value, address) {
	this.value = value; 
	this.address = address;
	this.right = null;
	this.left = null;
};


function Table(){
	this.root = null;
	this.maximumValue=0;
};


Table.prototype.add = function(value, address) {

    var currentNode = new Node(value, address);
    if (!this.root) {
        this.root = currentNode;
    } else {
        this.insert(currentNode);
    }
    return this;
};

Table.prototype.insert = function(currentNode) {
    var value = currentNode.value;
    var traverse = function(node) {
        //if value is equal to the value of the node, ignore
        //and exit function since we don't want duplicates
        if (value === node.value) {
            return;
        } else if (value > node.value) {
            if (!node.right) {
                node.right = currentNode;
                return;
            } else
                traverse(node.right);
        } else if (value < node.value) {
            if (!node.left) {
                node.left = currentNode;
                return;
            } else
                traverse(node.left);
        }
    };
    traverse(this.root);
};

Table.prototype.computeMaximum = function(){
	var maximumValue=0;
	let traverse = function(node){
		let currentAddress = node.address;
		if(node.right){
			let diff = Math.abs(currentAddress-node.right.address);
			if(diff>1){
				maximumValue+=node.value;
			}
			traverse(node.right);
		}
		if(node.left){
			let diff = Math.abs(currentAddress-node.right.address);
			if(diff >1){
				maximumValue+=node.value;
			}
			traverse(node.left);
		}

	};
	traverse(this.root);
	return maximumValue;
};

let robIntel = new Table();
let valueArray = [20, 100, 30,50, 60, 70,200, 2, 100] // Value in thuousands of dollars
for(let x = 0; x<valueArray.length; x++){
	robIntel.add(valueArray[x], x);
};

console.log(robIntel.computeMaximum());
