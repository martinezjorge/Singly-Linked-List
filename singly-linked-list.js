// Singly Linked List 

// initializes an empty list
function LinkedList() {
	this.head = null;
}

// checks if list is empty
LinkedList.prototype.isEmpty = function() {
	return this.head === null;
};

//returns the size of the list
LinkedList.prototype.size = function() {
	// points to the front of the list
	var current = this.head;
	// counter from 0
	var count = 0;
	// goes through the whole list
	while(current !== null) {
		// increments counter
		count++;
		// points to the next node on the list
		current = current.next;
	}
	// returns number of items on the list
	return count;
};

// will take in some value and will add to beginning of list
LinkedList.prototype.prepend = function(val) {
	// creates a new node with the value passed in it
	var newNode = {
		data: val,
		// makes the new node point to the current head, which is now next to it
		next: this.head
	};
	// updates this.head to point the newNode
	this.head = newNode;
};

// append method, adds val to end of list
LinkedList.prototype.append = function(val) {
	// new node declared with passed value and pointing at nothing
	var newNode = {
		data: val,
		next: null
	};
	// if the linked list is empty then it makes this new node the head of the list
	if(this.isEmpty()){
		this.head = newNode;
		return;
	}
	// if the link list is not empty then a pointer is created to point at the beginning of the list
	var current = this.head;
	
	// goes from the beginning of the list until the end where it's pointing at nothing
	while(current.next !== null){
		// goes to the next node in the list
		current = current.next;
	}
	// adds the node to the end of the list
	current.next = newNode;
};

// contains method checks if the list contains the passed data value
LinkedList.prototype.contains = function(val) {
	// pointer to the start of the list
	var current = this.head;
	// go through the list until the last node
	while(current !== null){
		// if the data in the current node equals the passed value
		if(current.data === val){
			// then the passed value is in the list
			return true;
		}
		// goes to the next node
		current = current.next;
	}
	// if it made it here then the passed value was not in the list
	return false;
};

// this method will remove a value if it exists in the list
LinkedList.prototype.remove = function(val){
	// if value is not in the list then we're done
	if(!this.contains(val)){
		return;
	}
	// if the first value of the list is what we're looking for
	if(this.head.data === val){
		// the next node is now the first node in the list
		this.head = this.head.next;
		// vamonos
		return;
	}
	// pointer to count behind the current node
	var prev = null;
	// pointer to count with the current node
	var curr = this.head;
	// until we find the value in the list
	while(curr.data !== val){
		// yesterday becomes today
		prev = curr;
		// today becomes tomorrow
		curr = curr.next;
	}
	// the passed value is snipped off by connecting the prev	
	// and curr pointer at the next node
	prev.next = curr.next;
};

LinkedList.prototype.print = function() {
	var output = '[';
	var current = this.head;
	while(current !== null){
		output += current.data;
		if(current.next !== null){
			output += ',';
		}
		current = current.next;
	}
	output += ']';
	console.log(output);
};
var list = new LinkedList();

list.append(10);
list.append(15);
list.append(20);
list.print();
list.prepend(5);
list.print();
console.log(list.contains(7));
list.print();
console.log(list.size());
console.log(list.isEmpty());
list.remove(10);