MOapp.filterProvider.register("classify", function() {
    return function(value) {
        value = value +"";
        switch(value){
        	case "base":
        		return "基础组件";
    		case "util":
    			return "组件";
			case "component":
				return "模块";
        }
    };
});