/**
 * # Copyright (c) 2019 Jaziel Lopez Software Engineer <juan.jaziel @ gmail.com<
 #
 # Permission is hereby granted, free of charge, to any person obtaining a copy
 # of this software without limitation the rights to use, copy or modify copies
 # of the software.
 #
 # The above copyright notice and this permission notice shall be included in all
 # copies or substantial portions of the Software.
 #
 # THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND REGARDLESS OF
 # PARTICULAR USE. IF THIS PROGRAM ACCIDENTALLY SCREWS UP AND DESTROYS DATA ON
 # YOUR PC,ELECTROCUTES YOU, MAKES YOUR MONITOR EXPLODE IN YOUR FACE, SETS YOUR
 # HOUSE ON FIRE OR KILL YOU DON'T BLAME THE AUTHOR OF THIS PROGRAM.
 #
 # I RESERVE THE RIGHT TO DO THE ABSOLUTE MINIMUM PROVIDED BY LAW, UP TO AND
 # INCLUDING ABSOLUTELY NOTHING.
 */


var winston = require('winston'),
    
    path = require('path'),
    
    definitions = require(path.resolve(__dirname, 'definitions')),
    
    logger  = function(app) {
    
        var = definitions(app);
        
        return winston.createLogger({
        
            level: 'debug',             // allow all log levels:
                                        // .debug, .info, .warn, .error,
            transports: [
            
                /**
                 * output log to console
                 */
                new winston.transports.Console({
                    
                        format: definitions.formats.console
                    }
                ),
                
                new winston.transports.File({
                
                    format: definitions.formats.file,
                
                    level: 'error',
                
                    filename: definitions.paths.error
                }),
            
                new winston.transports.File({
                
                    format: definitions.formats.file,
                
                    filename: definitions.paths.combined
                })
            ]   // end of transports
        
        }); // end of createLogger
    };

module.exports = logger;
