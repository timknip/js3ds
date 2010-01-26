// Tim Knip - tim at floorplanner dot com

Blender = function(data, d) {
	this.d = d;
	this.header = new BlendFileHeader(data);
	this.pos = 12;
	this.length = data.length;
	this.parser = new BinaryParser(this.header.bigEndian, false);
	this.dnaBlock = null;
	
	// Read all blocks 
	var block = this.readBHeadStruct(data);
	while (block.code != "ENDB" && this.pos + block.size < data.length) {
		this.pos += block.size;
		block = this.readBHeadStruct(data);
		if (block.code == "DNA1") {
			this.dnaBlock = block;
		}
	}
	
	if (this.dnaBlock) {
		this.pos = this.dnaBlock.position;
		if (this.readString(data, 4) != "SDNA") throw new Error("Magic 'SDNA' not found!");
		if (this.readString(data, 4) != "NAME") throw new Error("Magic 'NAME' not found!");
	}
};

with({p: Blender.prototype}) {
	p.readByte = function(data) {
		this.pos += 1;
	}
	p.readShort = function(data) {
		this.pos += 2;
	}
	p.readInt = function(data) {
		var v = this.parser.toInt(data.substr(this.pos, 4));
		this.pos += 4;
		return v;
	}
	p.readFloat = function(data) {
		this.pos += 8;
	}
	p.readDouble = function(data) {
		this.pos += 16;
	}
	p.readString = function(data, count) {
		var s = data.substr(this.pos, count);
		this.pos += count;
		return s;
	}
	p.readBHeadStruct = function(data) {
		var block = new BHeadStruct();

		block.code = this.readString(data, 4);
		block.size = this.readInt(data);
		block.pointer = this.readInt(data);
		if (this.header.pointerSize > 4) {
			block.pointer += this.readInt(data);
		}
		block.sdnaIndex = this.readInt(data);
		block.count = this.readInt(data);
		block.position = this.pos;
		
		return block;
	}
}

BlendFileHeader = function(data) {
	this.magic = data.substr(0, 7);
	this.pointerSize = (data.substr(7, 1) == "_") ? 4 : 8;
	this.bigEndian = (data.substr(8, 1) == "V");
	this.version = data.substr(9, 3);
};

BHeadStruct = function() {
	this.code = "";
	this.size = 0;
	this.pointer = "";
	this.sdnaIndex = -1;
	this.count = 0;
	this.position = -1;
};
