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

var path = require('path'),
    
    winston = require('winston');

/**
 *
 * @param app
 * @returns {{paths: {combined: string, error: string}, formats: {console: *, file: *}}}
 */
module.exports = function definitions(app) {
    
    return {
    
    
        paths: {
        
            /**
             * all log levels except error
             */
            combined: path.join("log", "combined-:app.log").replace(":app", app),
        
            /**
             * logs error level
             */
            error: path.join("log", "error-:app.log".replace(":app", app))
        
        },
        // end of paths
        formats: {
        
            /**
             * common format pattern used in console and file transports
             */
            console: winston.format.combine(
                
                winston.format.label({label: app}),
            
                winston.format.timestamp(),
            
                winston.format.splat(),
            
                winston.format.simple(),
            
                winston.format.colorize(),
            
                winston.format.printf(function ({level, message, label, timestamp}) {
                
                    return `${timestamp} [${label}] ${level}: ${message}`;
                })
            ),
        
            file: winston.format.combine(
                
                winston.format.label({label: app}),
            
                winston.format.timestamp(),
            
                winston.format.splat(),
            
                winston.format.simple(),
            
                winston.format.printf(function ({level, message, label, timestamp}) {
                
                    return `${timestamp} [${label}] ${level}: ${message}`;
                })
            )
        }
    };
};
