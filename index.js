


var spawn = require('child_process').spawn,
    path = require('path');

module.exports = function(ifile, odir, cb){
  var ofile = path.basename(ifile).split('.')[0] + '.pdf';

  ofile = path.join(odir, ofile);
  tiff2pd2 = spawn('tiff2pdf', ['-o', ofile, ifile]);

  tiff2pd2.stdout.on('data', function (data) {
    // console.log('stdout: ' + data);
    cb({message: 'stdout', data: data.toString('utf-8')});
  });

  tiff2pd2.stderr.on('data', function (data) {
    // console.log('stderr: ' + data);
    cb({message: 'stderr', data: data.toString('utf-8')});
  });

  tiff2pd2.on('close', function (code) {
    cb({message: 'close', code: code});
  });

  tiff2pd2.on('error', function (code) {
    cb({message: 'error', code: code});
  });

};
