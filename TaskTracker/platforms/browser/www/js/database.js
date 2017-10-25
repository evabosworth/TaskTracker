
if(!window.openDatabase){
	alert("not database allowed")
}

db = openDatabase("testDB", "0.0", "testDB", 65535);
db.transaction(function(tx){
	tx.executeSql('DROP TABLE IF EXISTS User;');
	tx.executeSql('CREATE TABLE IF NOT EXISTS User(UserId INTEGER NOT NULL PRIMARY KEY, FirstName TEXT NOT NULL, LastName TEXT NOT NULL);');
	tx.executeSql('INSERT INTO User VALUES (?,?,?)', [1,"Eevee", "Bosworth"],
		function(tx, res){
			console.log("inserted");
	});

	tx.executeSql("SELECT * FROM User;", [], 
		function(transation, result){
			for(var i = 0; i < result.rows.length; i++){
				var row = result.rows[i];
				console.log(row);
			}
	});
});