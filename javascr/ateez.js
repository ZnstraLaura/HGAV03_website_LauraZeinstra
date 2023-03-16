const mijnEersteAPIrequest = ''

fetch(mijnEersteAPIrequest,{})
.then (response => response.json())
.then (data =>console.log(data.response.doc[0].geometrie_ll))

