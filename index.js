


var spawn = require('child_process').spawn,
    path = require('path');

module.exports = function(ifile, odir){

  var ofile = ifile.split('.')[0] + '.pdf';
  var options = {
    cwd: odir,
  };

  tiff2pd2 = spawn('tiff2pd2', ['-o', ofile, ifile]);

  tiff2pd2.stdout.on('data', function (data) {
    console.log('stdout: ' + data);
  });

  tiff2pd2.stderr.on('data', function (data) {
    console.log('stderr: ' + data);
  });

  tiff2pd2.on('close', function (code) {
    console.log('child process exited with code ' + code);
  });

};
