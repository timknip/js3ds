var NULL_CHUNK = 0x0000;
var M3DMAGIC = 0x4D4D;    /*3DS file*/
var SMAGIC = 0x2D2D;
var LMAGIC = 0x2D3D;
var MLIBMAGIC = 0x3DAA;    /*MLI file*/
var MATMAGIC = 0x3DFF;
var CMAGIC = 0xC23D;    /*PRJ file*/
var M3D_VERSION = 0x0002;
var M3D_KFVERSION = 0x0005;
var COLOR_F = 0x0010;
var COLOR_24 = 0x0011;
var LIN_COLOR_24 = 0x0012;
var LIN_COLOR_F = 0x0013;
var INT_PERCENTAGE = 0x0030;
var FLOAT_PERCENTAGE = 0x0031;
var MDATA = 0x3D3D;
var MESH_VERSION = 0x3D3E;
var MASTER_SCALE = 0x0100;
var LO_SHADOW_BIAS = 0x1400;
var HI_SHADOW_BIAS = 0x1410;
var SHADOW_MAP_SIZE = 0x1420;
var SHADOW_SAMPLES = 0x1430;
var SHADOW_RANGE = 0x1440;
var SHADOW_FILTER = 0x1450;
var RAY_BIAS = 0x1460;
var O_CONSTS = 0x1500;
var AMBIENT_LIGHT = 0x2100;
var BIT_MAP = 0x1100;
var SOLID_BGND = 0x1200;
var V_GRADIENT = 0x1300;
var USE_BIT_MAP = 0x1101;
var USE_SOLID_BGND = 0x1201;
var USE_V_GRADIENT = 0x1301;
var FOG = 0x2200;
var FOG_BGND = 0x2210;
var LAYER_FOG = 0x2302;
var DISTANCE_CUE = 0x2300;
var DCUE_BGND = 0x2310;
var USE_FOG = 0x2201;
var USE_LAYER_FOG = 0x2303;
var USE_DISTANCE_CUE = 0x2301;
var MAT_ENTRY = 0xAFFF;
var MAT_NAME = 0xA000;
var MAT_AMBIENT = 0xA010;
var MAT_DIFFUSE = 0xA020;
var MAT_SPECULAR = 0xA030;
var MAT_SHININESS = 0xA040;
var MAT_SHIN2PCT = 0xA041;
var MAT_TRANSPARENCY = 0xA050;
var MAT_XPFALL = 0xA052;
var MAT_USE_XPFALL = 0xA240;
var MAT_REFBLUR = 0xA053;
var MAT_SHADING = 0xA100;
var MAT_USE_REFBLUR = 0xA250;
var MAT_SELF_ILLUM = 0xA084;
var MAT_TWO_SIDE = 0xA081;
var MAT_DECAL = 0xA082;
var MAT_ADDITIVE = 0xA083;
var MAT_WIRE = 0xA085;
var MAT_FACEMAP = 0xA088;
var MAT_TRANSFALLOFF_IN = 0xA08A;
var MAT_PHONGSOFT = 0xA08C;
var MAT_WIREABS = 0xA08E;
var MAT_WIRE_SIZE = 0xA087;
var MAT_TEXMAP = 0xA200;
var MAT_SXP_TEXT_DATA = 0xA320;
var MAT_TEXMASK = 0xA33E;
var MAT_SXP_TEXTMASK_DATA = 0xA32A;
var MAT_TEX2MAP = 0xA33A;
var MAT_SXP_TEXT2_DATA = 0xA321;
var MAT_TEX2MASK = 0xA340;
var MAT_SXP_TEXT2MASK_DATA = 0xA32C;
var MAT_OPACMAP = 0xA210;
var MAT_SXP_OPAC_DATA = 0xA322;
var MAT_OPACMASK = 0xA342;
var MAT_SXP_OPACMASK_DATA = 0xA32E;
var MAT_BUMPMAP = 0xA230;
var MAT_SXP_BUMP_DATA = 0xA324;
var MAT_BUMPMASK = 0xA344;
var MAT_SXP_BUMPMASK_DATA = 0xA330;
var MAT_SPECMAP = 0xA204;
var MAT_SXP_SPEC_DATA = 0xA325;
var MAT_SPECMASK = 0xA348;
var MAT_SXP_SPECMASK_DATA = 0xA332;
var MAT_SHINMAP = 0xA33C;
var MAT_SXP_SHIN_DATA = 0xA326;
var MAT_SHINMASK = 0xA346;
var MAT_SXP_SHINMASK_DATA = 0xA334;
var MAT_SELFIMAP = 0xA33D;
var MAT_SXP_SELFI_DATA = 0xA328;
var MAT_SELFIMASK = 0xA34A;
var MAT_SXP_SELFIMASK_DATA = 0xA336;
var MAT_REFLMAP = 0xA220;
var MAT_REFLMASK = 0xA34C;
var MAT_SXP_REFLMASK_DATA = 0xA338;
var MAT_ACUBIC = 0xA310;
var MAT_MAPNAME = 0xA300;
var MAT_MAP_TILING = 0xA351;
var MAT_MAP_TEXBLUR = 0xA353;
var MAT_MAP_USCALE = 0xA354;
var MAT_MAP_VSCALE = 0xA356;
var MAT_MAP_UOFFSET = 0xA358;
var MAT_MAP_VOFFSET = 0xA35A;
var MAT_MAP_ANG = 0xA35C;
var MAT_MAP_COL1 = 0xA360;
var MAT_MAP_COL2 = 0xA362;
var MAT_MAP_RCOL = 0xA364;
var MAT_MAP_GCOL = 0xA366;
var MAT_MAP_BCOL = 0xA368;
var NAMED_OBJECT = 0x4000;
var N_DIRECT_LIGHT = 0x4600;
var DL_OFF = 0x4620;
var DL_OUTER_RANGE = 0x465A;
var DL_INNER_RANGE = 0x4659;
var DL_MULTIPLIER = 0x465B;
var DL_EXCLUDE = 0x4654;
var DL_ATTENUATE = 0x4625;
var DL_SPOTLIGHT = 0x4610;
var DL_SPOT_ROLL = 0x4656;
var DL_SHADOWED = 0x4630;
var DL_LOCAL_SHADOW2 = 0x4641;
var DL_SEE_CONE = 0x4650;
var DL_SPOT_RECTANGULAR = 0x4651;
var DL_SPOT_ASPECT = 0x4657;
var DL_SPOT_PROJECTOR = 0x4653;
var DL_SPOT_OVERSHOOT = 0x4652;
var DL_RAY_BIAS = 0x4658;
var DL_RAYSHAD = 0x4627;
var N_CAMERA = 0x4700;
var CAM_SEE_CONE = 0x4710;
var CAM_RANGES = 0x4720;
var OBJ_HIDDEN = 0x4010;
var OBJ_VIS_LOFTER = 0x4011;
var OBJ_DOESNT_CAST = 0x4012;
var OBJ_DONT_RECVSHADOW = 0x4017;
var OBJ_MATTE = 0x4013;
var OBJ_FAST = 0x4014;
var OBJ_PROCEDURAL = 0x4015;
var OBJ_FROZEN = 0x4016;
var N_TRI_OBJECT = 0x4100;
var POINT_ARRAY = 0x4110;
var POINT_FLAG_ARRAY = 0x4111;
var FACE_ARRAY = 0x4120;
var MSH_MAT_GROUP = 0x4130;
var SMOOTH_GROUP = 0x4150;
var MSH_BOXMAP = 0x4190;
var TEX_VERTS = 0x4140;
var MESH_MATRIX = 0x4160;
var MESH_COLOR = 0x4165;
var MESH_TEXTURE_INFO = 0x4170;
var KFDATA = 0xB000;
var KFHDR = 0xB00A;
var KFSEG = 0xB008;
var KFCURTIME = 0xB009;
var AMBIENT_NODE_TAG = 0xB001;
var OBJECT_NODE_TAG = 0xB002;
var CAMERA_NODE_TAG = 0xB003;
var TARGET_NODE_TAG = 0xB004;
var LIGHT_NODE_TAG = 0xB005;
var L_TARGET_NODE_TAG = 0xB006;
var SPOTLIGHT_NODE_TAG = 0xB007;
var NODE_ID = 0xB030;
var NODE_HDR = 0xB010;
var PIVOT = 0xB013;
var INSTANCE_NAME = 0xB011;
var MORPH_SMOOTH = 0xB015;
var BOUNDBOX = 0xB014;
var POS_TRACK_TAG = 0xB020;
var COL_TRACK_TAG = 0xB025;
var ROT_TRACK_TAG = 0xB021;
var SCL_TRACK_TAG = 0xB022;
var MORPH_TRACK_TAG = 0xB026;
var FOV_TRACK_TAG = 0xB023;
var ROLL_TRACK_TAG = 0xB024;
var HOT_TRACK_TAG = 0xB027;
var FALL_TRACK_TAG = 0xB028;
var HIDE_TRACK_TAG = 0xB029;
var POLY_2D = 0x5000;
var SHAPE_OK = 0x5010;
var SHAPE_NOT_OK = 0x5011;
var SHAPE_HOOK = 0x5020;
var PATH_3D = 0x6000;
var PATH_MATRIX = 0x6005;
var SHAPE_2D = 0x6010;
var M_SCALE = 0x6020;
var M_TWIST = 0x6030;
var M_TEETER = 0x6040;
var M_FIT = 0x6050;
var M_BEVEL = 0x6060;
var XZ_CURVE = 0x6070;
var YZ_CURVE = 0x6080;
var INTERPCT = 0x6090;
var DEFORM_LIMIT = 0x60A0;
var USE_CONTOUR = 0x6100;
var USE_TWEEN = 0x6110;
var USE_SCALE = 0x6120;
var USE_TWIST = 0x6130;
var USE_TEETER = 0x6140;
var USE_FIT = 0x6150;
var USE_BEVEL = 0x6160;
var DEFAULT_VIEW = 0x3000;
var VIEW_TOP = 0x3010;
var VIEW_BOTTOM = 0x3020;
var VIEW_LEFT = 0x3030;
var VIEW_RIGHT = 0x3040;
var VIEW_FRONT = 0x3050;
var VIEW_BACK = 0x3060;
var VIEW_USER = 0x3070;
var VIEW_CAMERA = 0x3080;
var VIEW_WINDOW = 0x3090;
var VIEWPORT_LAYOUT_OLD = 0x7000;
var VIEWPORT_DATA_OLD = 0x7010;
var VIEWPORT_LAYOUT = 0x7001;
var VIEWPORT_DATA = 0x7011;
var VIEWPORT_DATA_3 = 0x7012;
var VIEWPORT_SIZE = 0x7020;
var NETWORK_VIEW = 0x7030;	

Lib3ds = function(element, debug) {
	this.element = element;
	this.debug = debug != undefined ? debug : false;
	this.parser = new BinaryParser(false, false);
	this.position = 0;
	this.meshes = [];
};

with ({p:Lib3ds.prototype}) {
	p.readFile = function(data) {
		this.position = 0;
		this.meshes = [];
		
		var chunk = this.readChunk(data);
		var c = 0;

		switch (chunk.id) {
			case MLIBMAGIC:
		    case CMAGIC:
			case M3DMAGIC:
				c = this.nextChunk(data, chunk);
				while (c != 0) {
					switch (c) {
						case M3D_VERSION:
							this.mesh_version = this.readDWord(data);
							this.log("M3D_VERSION " + this.mesh_version);
							break;
						case MDATA: // Model data
							this.resetPosition(data);
							this.log("MDATA");
							this.readMDATA(data);
							break;
						case KFDATA: // Keyframe data
							break;
						default:
							break;
					}
					c = this.nextChunk(data, chunk);
				}
				break;
			default:
				this.log("Unknown chunk: " + c.toString(16));
				break;
		}
		alert("parsed #" + this.meshes.length + " meshes!");
	}
	
	p.readMDATA = function(data) {
		var chunk = this.readChunk(data);
		var c = this.nextChunk(data, chunk);
		
		while (c != 0) {
			switch (c) {
				case MESH_VERSION:
					this.mesh_version = this.readInt(data);
					this.log( "MESH_VERSION: " + this.mesh_version );
					break;
				case MASTER_SCALE:
					this.master_scale = this.readFloat(data);
					this.log( "MASTER_SCALE: " + this.master_scale );
					break;
				case NAMED_OBJECT:
					this.resetPosition(data);
					this.log("NAMED OBJECT");
					this.readNamedObject(data);
					break;
				default:
					break;
			}
			c = this.nextChunk(data, chunk);
		}
	}
	
	p.readMesh = function(data) {
		var chunk = this.readChunk(data);
		var c = this.nextChunk(data, chunk);
		var mesh = new Lib3dsMesh();
		var i, j;
		
		while (c != 0) {
			switch (c) {
				case MESH_MATRIX:
					break;
				case MESH_COLOR:
					mesh.color = this.readByte(data);
					this.log (" -> color: " + mesh.color);
					break;
				case POINT_ARRAY:
					mesh.points = this.readWord(data);
					mesh.pointL = [];
					this.log (" -> #points: " + mesh.points + " " + this.position);
					for (i = 0; i < mesh.points; i++) {
						var vec = [];
						for (j = 0; j < 3; j++) {
							vec.push(this.readFloat(data));
						}
						mesh.pointL.push(vec);
					}
					break;
				case POINT_FLAG_ARRAY:
					break;
				case FACE_ARRAY:
					this.resetPosition(data);
					this.readFaceArray(data, mesh);
					break;
				case MESH_TEXTURE_INFO:
					break;
				case TEX_VERTS:
					mesh.texels = this.readWord(data);
					mesh.texelL = [];
					this.log (" -> #texels: " + mesh.texels);
					for (i = 0; i < mesh.texels; i++) {
						mesh.texelL.push([this.readFloat(data), this.readFloat(data)]);
					}
					break;
				default:
					break;
			}
			c = this.nextChunk(data, chunk);
		}
		
		this.endChunk(chunk);
		
		return mesh;
	}
	
	p.readFaceArray = function(data, mesh) {
		var chunk = this.readChunk(data);
		var i, j;
		
		mesh.faces = this.readWord(data);
		mesh.faceL = [];
		
		this.log (" -> #faces: " + mesh.faces);
		
		for(i = 0; i < mesh.faces; ++i) {
			var face = new Lib3dsFace();
			
			face.points = [];
			face.points.push(this.readWord(data));
			face.points.push(this.readWord(data));
			face.points.push(this.readWord(data));
			
			// visibility I believe (0 or 1)
			face.flags = this.readWord(data);

			mesh.faceL.push(face);
		}
		
	}
	
	p.readNamedObject = function(data) {
		var chunk = this.readChunk(data);
		
		var name = this.readString(data, 64);
		
		this.log(" -> " + name);
		
		chunk.cur = this.position;
		
		var c = this.nextChunk(data, chunk);
		
		while (c != 0) {
			switch (c) {
				case N_TRI_OBJECT:
					this.resetPosition(data);
					var mesh = this.readMesh(data);
					this.meshes.push(mesh);
					break;
				default:
					break;
			}
			c = this.nextChunk(data, chunk);
		}
		
		this.endChunk(chunk);
	}
	
	p.readChunk = function(data) {
		var chunk = new Lib3dsChunk();
		chunk.cur = this.position;
		chunk.id = this.readWord(data);
		chunk.size = this.readDWord(data);
		chunk.end = chunk.cur + chunk.size;
	  	chunk.cur += 6;
		return chunk;
	}
	
	p.endChunk = function(chunk) {
		this.position = chunk.end;
	}
	
	p.nextChunk = function(data, chunk) {
		if (chunk.cur >= chunk.end) {
			return 0;
		}
		this.position = chunk.cur;
		try {
			var next = this.readChunk(data);
			chunk.cur += next.size;
			return next.id;
		} catch(e) {
			return 0;
		}
	}
	
	p.resetPosition = function(data, chunk) {
		this.position -= 6;
	}
	
	p.readByte = function(data) {
		var v = this.parser.toByte(data.substr(this.position, 1));
		this.position += 1;
		return v;
	}
	
	p.readFloat = function(data) {
		try {
		var v = this.parser.toFloat(data.substr(this.position, 4));
		this.position += 4;
		return v;
		} catch(e) {
			this.log("" + e + " " + this.position + " " + data.length);
		}
	}
	
	p.readInt = function(data) {
		var v = this.parser.toInt(data.substr(this.position, 4));
		this.position += 4;
		return v;
	}
	
	p.readShort = function(data) {
		var v = this.parser.toShort(data.substr(this.position, 2));
		this.position += 2;
		return v;
	}
	
	p.readDWord = function(data) {
		var v = this.parser.toDWord(data.substr(this.position, 4));
		this.position += 4;
		return v;
	}
	
	p.readWord = function(data) {
		var v = this.parser.toWord(data.substr(this.position, 2));
		this.position += 2;
		return v;
	}
	
	p.readString = function(data, maxLength) {
		var s = "";
		for(var i = 0; i < maxLength; i++) {
			var c = this.readByte(data);
			if( !c ) break;
			s += String.fromCharCode(c);
		}
		return s;
	}
	
	p.log = function(msg) {
		if(this.debug) this.element.innerHTML += msg + "<br/>";
	}
};

Lib3dsChunk = function() {
	this.cur = 0;
	this.id = 0;
	this.size = 0;
	this.end = 0;
};

Lib3dsFace = function() {
	this.flags = 0;
	this.points = [];
};

Lib3dsMesh = function() {
	this.next = null;
	this.matrix = [1,0,0,0, 0,1,0,0, 0,0,1,0, 0,0,0,1];
	this.name = "";
	this.color = 0;
	this.points = 0;
	this.pointL = [];
	this.flags = 0;
	this.flagL = [];
	this.texels = 0;
	this.texelL = [];
	this.faces = 0;
	this.faceL = [];
};

