exports.connectionString = function(obj){
    return 'mongodb://' + obj.user + ':' + obj.password + '@' + obj.host + ':' + obj.port + '/' + obj.name;
};