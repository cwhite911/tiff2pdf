var tiff2pdf = require('../'),
    test = require('tape'),
    path = require('path'),
    fs = require('fs');

  //Test Files
  var outDir = path.join(__dirname+'/fixtures/out/'),
      inFile1 = path.join(__dirname,'/fixtures/in/test1.tiff'),
      inFile2 = path.join(__dirname,'/fixtures/in/test2.tif'),
      inFile3 = path.join(__dirname,'/fixtures/in/test3.tiff'),
      inFile4 = path.join(__dirname,'/fixtures/in/test4.pdf'),
      inFile5 = path.join(__dirname,'/fixtures/in/test5.tif'),
      inFile6 = path.join(__dirname,'/fixtures/in/test6.tif');

//Test 1: Successful conversion file ending with extension .tiff
test('Test 1: Successful conversion file ending with extension .tiff', function (t){
  tiff2pdf(inFile1, outDir, function(result){
    t.ok(result.message, 'Test 1: Successful');
  });
  t.end();
});

//Test 2: Successful conversion file ending with extension .tif
test('Test 2: Successful conversion file ending with extension .tif', function (t){
  tiff2pdf(inFile2, outDir, function(result){
    t.ok(result.message, 'Test 2: successful');
  });
  t.end();
});

//Test 3: File not found
test('Test 3: File not found', function (t){
  tiff2pdf(inFile3, outDir, function(result){
    t.ok(result.message, 'Test 3: successful, file does not exisit');
  });
  t.end();
});

//Test 4: Wrong file extension
test('Test 4:  Wrong file extension', function (t){
  tiff2pdf(inFile4, outDir, function(result){
    t.ok(result.message, 'Test 4: successful, inccorect file type');
  });
  t.end();
});

//Test 5: Corrupt file
test('Test 5:  Corrupt file', function (t){
  tiff2pdf(inFile5, outDir, function(result){
    t.ok(result.message, 'Test 5: successful, corrupt file');
  });
  t.end();
});

//Test 6: Normal tiff
test('Test 6: Normal tiff', function (t){
  tiff2pdf(inFile6, outDir, function(result){
    t.ok(result.message, 'Test 6: successful, Normal tiff');
  });
  t.end();
});
