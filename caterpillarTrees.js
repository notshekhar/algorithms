// Not long ago you discovered a wonderful tree in the nearby woods that made you very curious about the greenery around you. You went to the nearby woods and drew various plants in your notebook. The plants in the woods have various structures: some of them even contain loops!

// Anyway, for now you are interested only in trees. You came up with a brand new property: you call a tree a caterpillar if there exists a path in it, such that each vertex of a tree either belongs to this path or is connected to one of its vertices by a single edge. To find out more about them, you would like to write a program that will find all interesting trees in the structures you drew in your notebook.

// The plants you drew consist of n vertices and are connected by several edges. Calculate the number of regular trees and caterpillar trees in the structures you drew in your notebook.

const Node = function(name, parent){
	this.name = name 
	this.parent = parent || false
}

function caterpillarTrees(n, edges) {
	let tree = [new Node(0)]
	for(let i=0; i<n-2; i++){
		let node = new Node(edges[i][1], tree[edges[i][0]])
		tree[edges[i][1]] = node
	}
	let parent = tree[n-2]
	return parent
}


let edges = [[0, 1], [1, 2], [2, 3], [2, 4], [4, 5], [4, 6], [4, 7],
         [4, 8], [4, 9], [4, 10], [10, 11], [11, 12], [11, 13],
         [11, 14], [14, 15], [14, 16], [14, 17], [14, 18], [14, 19]]


let parent = caterpillarTrees(21, edges)
console.log(parent)