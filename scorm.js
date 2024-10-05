var apiInitialized = false;
var apiTerminated = false;
var scormData = {};

// SCORM 1.2 API implementation
var SCORM_API = {
    LMSInitialize: function(param) {
        if (apiInitialized) return "false";
        apiInitialized = true;
        console.log("SCORM Initialized");
        return "true";
    },
    LMSFinish: function(param) {
        if (!apiInitialized || apiTerminated) return "false";
        apiTerminated = true;
        apiInitialized = false;
        console.log("SCORM Finished");
        return "true";
    },
    LMSGetValue: function(key) {
        console.log("SCORM GetValue: ", key);
        return scormData[key] || "";
    },
    LMSSetValue: function(key, value) {
        console.log("SCORM SetValue: ", key, value);
        //scormData[key] = value;
        scormData['cmi.suspend_data'] = '2Y1e60708090a0b0c0IH1001612z01012011120121201312014120151201612T80kl100001^1^1^1^1^v_player.5qO6iUHKweL.6WI1I0q4qZ31^1^00002000';
        return "true";
    },
    LMSCommit: function(param) {
        console.log("SCORM Commit");
        return "true";
    },
    LMSGetLastError: function() {
        return "0"; // No error
    },
    LMSGetErrorString: function(errorCode) {
        return "No error";
    },
    LMSGetDiagnostic: function(param) {
        return "No diagnostic";
    }
};

// Bind SCORM API to window object
window.API = SCORM_API;