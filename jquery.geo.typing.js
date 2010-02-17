/* jQuery geo typing
 * http://tbliseli.com
 * Copyright (c) 2010 Nika Gejadze
 * Thanks To Lado Kumsiashvili ( herrlado )
 * Version 0.1
 * Licensed under GPL:
 * http://www.gnu.org/licenses/gpl.html 
 */
(function($){  
$.fn.geo = function(opt) {
var def = {
	turn: "on",
};
var opt = $.extend(def, opt);
$(this).unbind();
this.each(function() {
	$(this).keypress(function(e) {
		if(!e.ctrlKey && !e.altKey && !e.metaKey) { 
			var code = (e.keyCode ? e.keyCode : e.which);
			if(code > 64 && code <= 127) {
				if(opt.turn == "off"){	return true; }else{
					e.preventDefault();
					var text = String.fromCharCode(ide(code));
					if (document.selection) {
						this.focus();
						var sel = document.selection.createRange();
						sel.select();
						sel.text = text;
						var lenght = sel.text.lenght;
						sel.moveStart('character', text.length);
						sel.moveEnd('character', text.length);
					}else if(this.selectionStart || this.selectionStart == 0){
						var start = this.selectionStart;
						var end = this.selectionEnd;
						var prefix = this.value.substring(0, start);
						var suffix = this.value.substring(end,this.value.length);
						var scrollTop = this.scrollTop;
						this.value = prefix + text + suffix;
						this.focus();
						this.selectionStart = start + text.length;
						this.selectionEnd = end + text.length;
						this.scrollTop = scrollTop;
					}else{
						this.value+=text;
					}
}}}});});			
        // Mapping
        function ide(num){
            var value = lookUp[num];
            return value ? value : num;
        }
        //lookup table
        var lookUp = {
            97: 4304, 98: 4305, 99: 4330, 100:4307,
            101:4308, 102:4324, 103:4306, 104:4336,
            105:4312, 106:4335, 107:4313, 108:4314,
            109:4315, 110:4316, 111:4317, 112:4318,
            113:4325, 114:4320, 115:4321, 116:4322,
            84:4311,  117:4323, 118:4309, 119:4332,
            87:4333,  120:4334, 121:4327, 122:4310, 
			90:4331, 82:4326
        };
    }; 
})(jQuery);