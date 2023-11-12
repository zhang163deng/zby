/*!
  * v2ray 订阅 Worker v1.6
  * 版权所有 2023 Vahid Farid (https://twitter.com/vahidfarid)
  * 根据 GPLv3 授权 (https://github.com/vfarid/v2ray-worker-sub/blob/main/Licence.md)
  */

var 最大配置 = 1000;
var INCLUDE_ORIGINAL = true；
var configProviders = [
  {
    名称：“vpei”，
    类型：“b64”，
    网址：[
      “https://raw.githubusercontent.com/vpei/Free-Node-Merge/main/o/node.txt”
    ]
  },
  {
    名称：“mfuu”，
    类型：“b64”，
    网址：[
      “https://raw.githubusercontent.com/mfuu/v2ray/master/v2ray”
    ]
  },
  {
    名称：“豌豆软”，
    类型：“原始”，
    网址：[
      “https://raw.githubusercontent.com/peasoft/NoMoreWalls/master/list_raw.txt”
    ]
  },
  {
    名称：“二毛子”，
    类型：“b64”，
    网址：[
      “https://raw.githubusercontent.com/ermaozi/get_subscribe/main/subscribe/v2ray.txt”
    ]
  },
  {
    名称：“aiboboxx”，
    类型：“b64”，
    网址：[
      “https://raw.githubusercontent.com/aiboboxx/v2rayfree/main/v2”
    ]
  },
  {
    名称：“马赫迪布兰德”，
    类型：“原始”，
    网址：[
      “https://raw.githubusercontent.com/mahdibland/V2RayAggregator/master/sub/splitted/vmess.txt”，
      “https://raw.githubusercontent.com/mahdibland/V2RayAggregator/master/sub/splitted/trojan.txt”
    ]
  },
  {
    名称：“巴迪亚法”，
    类型：“原始”，
    网址：[
      “https://raw.githubusercontent.com/Bardiafa/Free-V2ray-Config/main/All_Configs_Sub.txt”
    ]
  },
  {
    名称：“自动代理”，
    类型：“b64”，
    网址：[
      “https://raw.githubusercontent.com/w1770946466/Auto_proxy/main/Long_term_subscription1”，
      “https://raw.githubusercontent.com/w1770946466/Auto_proxy/main/Long_term_subscription2”，
      “https://raw.githubusercontent.com/w1770946466/Auto_proxy/main/Long_term_subscription3”，
      “https://raw.githubusercontent.com/w1770946466/Auto_proxy/main/Long_term_subscription4”，
      “https://raw.githubusercontent.com/w1770946466/Auto_proxy/main/Long_term_subscription5”，
      “https://raw.githubusercontent.com/w1770946466/Auto_proxy/main/Long_term_subscription6”，
      “https://raw.githubusercontent.com/w1770946466/Auto_proxy/main/Long_term_subscription7”，
      “https://raw.githubusercontent.com/w1770946466/Auto_proxy/main/Long_term_subscription8”
    ]
  },
  {
    名称：“freefq”，
    类型：“b64”，
    网址：[
      “https://raw.githubusercontent.com/freefq/free/master/v2”
    ]
  },
  {
    名称：“pawdroid”，
    类型：“b64”，
    网址：[
      “https://raw.githubusercontent.com/Pawdroid/Free-servers/main/sub”
    ]
  }
];

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => 函数 __require() {
  返回模组|| (0, cb[__getOwnPropNames(cb)[0]])((mod = { 导出: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (让 __getOwnPropNames(from) 的键)
      if (!__hasOwnProp.call(to, key) && key !== 除外)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  还给;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || ！mod || !mod.__esModule ? __defProp(目标, "默认", { 值: mod, 可枚举: true }) : 目标,
  模组
））；

//node_modules/base64-js/index.js
var require_base64_js = __commonJS({
  “node_modules/base64-js/index.js”（导出）{
    “严格使用”；
    出口.byteLength = byteLength;
    导出.toByteArray = toByteArray;
    导出。fromByteArray = fromByteArray;
    var 查找 = [];
    var revLookup = [];
    var Arr = typeof Uint8Array !== "未定义" ? Uint8Array ：数组；
    var代码=“ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/”;
    for (i = 0, len = code.length; i < len; ++i) {
      查找[i] = 代码[i]；
      revLookup[code.charCodeAt(i)] = i;
    }
    变量我；
    变长；
    revLookup["-".charCodeAt(0)] = 62;
    revLookup["_".charCodeAt(0)] = 63;
    函数 getLens(b64) {
      var len2 = b64.length;
      如果 (len2 % 4 > 0) {
        throw new Error("无效字符串。长度必须是 4 的倍数");
      }
      var validLen = b64.indexOf("=");
      if (validLen === -1)
        有效长度 = len2;
      var placeHoldersLen = validLen === len2 ？0 : 4 - 有效长度 % 4;
      返回 [validLen, placeHoldersLen];
    }
    函数字节长度（b64）{
      var 镜头 = getLens(b64);
      var validLen = 镜头[0];
      var placeHoldersLen = 镜头[1];
      return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
    }
    函数 _byteLength(b64, validLen, placeHoldersLen) {
      return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
    }
    函数 toByteArray(b64) {
      var tmp；
      var 镜头 = getLens(b64);
      var validLen = 镜头[0];
      var placeHoldersLen = 镜头[1];
      var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
      var curByte = 0;
      var len2 = placeHolderLen > 0 ? validLen - 4 ：有效长度；
      变种i2；
      for (i2 = 0; i2 < len2; i2 += 4) {
        tmp = revLookup[b64.charCodeAt(i2)] << 18 | revLookup[b64.charCodeAt(i2 + 1)] << 12 | revLookup[b64.charCodeAt(i2 + 2)] << 6 | revLookup[b64.charCodeAt(i2 + 3)];
        arr[curByte++] = tmp >> 16 & 255;
        arr[curByte++] = tmp >> 8 & 255;
        arr[curByte++] = tmp & 255;
      }
      如果（占位符长度 === 2）{
        tmp = revLookup[b64.charCodeAt(i2)] << 2 | tmp = revLookup[b64.charCodeAt(i2)] << 2 | revLookup[b64.charCodeAt(i2 + 1)] >> 4;
        arr[curByte++] = tmp & 255;
      }
      如果（placeHoldersLen === 1）{
        tmp = revLookup[b64.charCodeAt(i2)] << 10 | revLookup[b64.charCodeAt(i2 + 1)] << 4 | revLookup[b64.charCodeAt(i2 + 2)] >> 2;
        arr[curByte++] = tmp >> 8 & 255;
        arr[curByte++] = tmp & 255;
      }
      返回 arr；
    }
    函数 TripletToBase64(num) {
      返回查找[数字 >> 18 & 63] + 查找[数字 >> 12 & 63] + 查找[数字 >> 6 & 63] + 查找[数字 & 63];
    }
    函数encodeChunk(uint8, 开始, 结束) {
      var tmp；
      var 输出 = [];
      for (var i2 = 开始; i2 < 结束; i2 += 3) {
        tmp = (uint8[i2] << 16 & 16711680) + (uint8[i2 + 1] << 8 & 65280) + (uint8[i2 + 2] & 255);
        输出.push(tripletToBase64(tmp));
      }
      返回输出.join("");
    }
    函数 fromByteArray(uint8) {
      var tmp；
      var len2 = uint8.length;
      var extraBytes = len2 % 3;
      var 部分 = [];
      var maxChunkLength = 16383;
      for (var i2 = 0, len22 = len2 - extraBytes; i2 < len22; i2 += maxChunkLength) {
        parts.push(encodeChunk(uint8, i2, i2 + maxChunkLength > len22 ? len22 : i2 + maxChunkLength));
      }
      if (额外字节 === 1) {
        tmp = uint8[len2 - 1];
        零件.推(
          查找[tmp >> 2] + 查找[tmp << 4 & 63] + "=="
        ）；
      } else if (extraBytes === 2) {
        tmp = (uint8[len2 - 2] << 8) + uint8[len2 - 1];
        零件.推(
          查找[tmp >> 10] + 查找[tmp >> 4 & 63] + 查找[tmp << 2 & 63] + "=
        ）；
      }
      返回parts.join("");
    }
  }
});

//node_modules/ieee754/index.js
var require_ieee754 = __commonJS({
  “node_modules/ieee754/index.js”（导出）{
    Exports.read = 函数(缓冲区, 偏移量, isLE, mLen, nBytes) {
      var e，m；
      var eLen = nBytes * 8 - mLen - 1；
      var eMax = (1 << eLen) - 1;
      var eBias = eMax >> 1;
      var nBits = -7;
      var i = isLE ? nBytes - 1 : 0;
      var d = isLE ? -1：1；
      var s = 缓冲区[偏移量+ i];
      我+= d;
      e = s & (1 << -nBits) - 1;
      s >>= -nBits；
      nBits += eLen；
      for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {
      }
      m = e & (1 << -nBits) - 1;
      e >>= -nBits；
      nBits += mLen；
      for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {
      }
      如果（e === 0）{
        e = 1 - eBias；
      } 否则 if (e === eMax) {
        返回米？NaN : (s ? -1 : 1) * 无穷大；
      } 别的 {
        m = m + Math.pow(2, mLen);
        e = e - eBias；
      }
      return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
    };
    Exports.write = 函数(缓冲区, 值, 偏移量, isLE, mLen, nBytes) {
      变量 e、m、c；
      var eLen = nBytes * 8 - mLen - 1；
      var eMax = (1 << eLen) - 1;
      var eBias = eMax >> 1;
      var rt = mLen === 23 ？Math.pow(2, -24) - Math.pow(2, -77) : 0;
      var i = isLE ? 0：nBytes - 1；
      var d = isLE ? 1：-1；
      var s = 值 < 0 || 值 === 0 && 1 / 值 < 0 ？1：0；
      值 = Math.abs(值);
      if (isNaN(值) || 值 === 无穷大) {
        m = isNaN(值) ? 1：0；
        e = e 最大；
      } 别的 {
        e = Math.floor(Math.log(值) / Math.LN2);
        if (值 * (c = Math.pow(2, -e)) < 1) {
          e--;
          c*=2；
        }
        如果 (e + eBias >= 1) {
          值+=rt/c；
        } 别的 {
          值 += rt * Math.pow(2, 1 - eBias);
        }
        如果（值 * c >= 2）{
          e++；
          c/=2；
        }
        如果 (e + eBias >= eMax) {
          米 = 0;
          e = e 最大；
        } 否则如果 (e + eBias >= 1) {
          m = (值 * c - 1) * Math.pow(2, mLen);
          e = e + eBias；
        } 别的 {
          m = 值 * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
          e = 0;
        }
      }
      for (; mLen >= 8; 缓冲区[偏移量 + i] = m & 255, i += d, m /= 256, mLen -= 8) {
      }
      e = e << mLen | 米；
      eLen += mLen；
      for (; eLen > 0; 缓冲区[偏移量 + i] = e & 255, i += d, e /= 256, eLen -= 8) {
      }
      缓冲区[偏移量+ i - d] |= s * 128;
    };
  }
});

//node_modules/buffer/index.js
var require_buffer = __commonJS({
  “node_modules/buffer/index.js”（导出）{
    “严格使用”；
    var base64 = require_base64_js();
    var ieee754 = require_ieee754();
    var customInspectSymbol = typeof Symbol ===“函数”&& typeof Symbol[“for”] ===“函数”？符号[“for”](“nodejs.util.inspect.custom”): null;
    出口.Buffer = Buffer3;
    出口.SlowBuffer = SlowBuffer;
    出口。INSPECT_MAX_BYTES = 50;
    var K_MAX_LENGTH = 2147483647;
    出口.kMaxLength = K_MAX_LENGTH;
    Buffer3.TYPED_ARRAY_SUPPORT = typedArraySupport();
    if (!Buffer3.TYPED_ARRAY_SUPPORT && typeof console !== "未定义" && typeof console.error === "函数") {
      控制台.错误（
        “此浏览器缺乏 `buffer` v5.x 所需的类型化数组 (Uint8Array) 支持。如果您需要旧浏览器支持，请使用 `buffer` v4.x。”
      ）；
    }
    函数 typedArraySupport() {
      尝试 {
        const arr = new Uint8Array(1);
        const proto = { foo: function() {
          返回42；
        } };
        Object.setPrototypeOf(proto, Uint8Array.prototype);
        Object.setPrototypeOf(arr, 原型);
        返回 arr.foo() === 42;
      } 捕获 (e) {
        返回假；
      }
    }
    Object.defineProperty(Buffer3.prototype, "父级", {
      可枚举：真实，
      获取：函数（）{
        if (!Buffer3.isBuffer(this))
          返回无效0；
        返回 this.buffer;
      }
    });
    Object.defineProperty(Buffer3.prototype, "偏移量", {
      可枚举：真实，
      获取：函数（）{
        if (!Buffer3.isBuffer(this))
          返回无效0；
        返回 this.byteOffset;
      }
    });
    函数createBuffer（长度）{
      如果（长度> K_MAX_LENGTH）{
        throw new RangeError('值“' + length + '”对于选项“size”无效');
      }
      const buf = new Uint8Array(长度);
      Object.setPrototypeOf(buf, Buffer3.prototype);
      返回缓冲区；
    }
    函数 Buffer3(arg, 编码或偏移量, 长度) {
      if (typeof arg === "数字") {
        if (typeofcodingOrOffset === "string") {
          抛出新的类型错误（
            '“字符串”参数必须是字符串类型。收到的类型号'
          ）；
        }
        返回 allocUnsafe(arg);
      }
      从（arg，encodingOrOffset，长度）返回；
    }
    Buffer3.poolSize = 8192;
    函数 from（值，encodingOrOffset，长度）{
      if (typeof value === "string") {
        return fromString(值, 编码或偏移量);
      }
      if (ArrayBuffer.isView(值)) {
        从ArrayView返回（值）；
      }
      如果（值==空）{
        抛出新的类型错误（
          “第一个参数必须是 string、Buffer、ArrayBuffer、Array 或 Array-like Object 类型之一。接收类型” + typeof value
        ）；
      }
      if (isInstance(value, ArrayBuffer) || value && isInstance(value.buffer, ArrayBuffer)) {
        return fromArrayBuffer(值, 编码或偏移量, 长度);
      }
      if (typeof SharedArrayBuffer !== "未定义" && (isInstance(value, SharedArrayBuffer) || value && isInstance(value.buffer, SharedArrayBuffer))) {
        return fromArrayBuffer(值, 编码或偏移量, 长度);
      }
      if (typeof value === "number") {
        抛出新的类型错误（
          '“值”参数不能是数字类型。收到的类型号'
        ）；
      }
      const valueOf = value.valueOf && value.valueOf();
      if (valueOf != null && valueOf !== value) {
        返回 Buffer3.from(valueOf, 编码OrOffset, 长度);
      }
      const b = fromObject(值);
      如果 (b)
        返回b；
      if (typeof Symbol !== "未定义" && Symbol.toPrimitive != null && typeof value[Symbol.toPrimitive] === "函数") {
        return Buffer3.from(value[Symbol.toPrimitive]("string"),encodingOrOffset,length);
      }
      抛出新的类型错误（
        “第一个参数必须是 string、Buffer、ArrayBuffer、Array 或 Array-like Object 类型之一。接收类型” + typeof value
      ）；
    }
    Buffer3.from = 函数（值，encodingOrOffset，长度）{
      从（值，编码或偏移，长度）返回；
    };
    Object.setPrototypeOf(Buffer3.prototype, Uint8Array.prototype);
    Object.setPrototypeOf(Buffer3, Uint8Array);
    函数断言大小（大小）{
      if (typeof size !== "number") {
        throw new TypeError('“size”参数必须是数字类型');
      } 否则如果（大小 < 0）{
        throw new RangeError('值“' + size + '”对于选项“size”无效');
      }
    }
    函数分配（大小，填充，编码）{
      断言大小（大小）；
      如果（大小 <= 0）{
        返回创建缓冲区（大小）；
      }
      if (填充!== void 0) {
        返回编码类型===“字符串”？createBuffer(size).fill(fill, 编码) : createBuffer(size).fill(fill);
      }
      返回创建缓冲区（大小）；
    }
    Buffer3.alloc = 函数（大小、填充、编码）{
      返回分配（大小，填充，编码）；
    };
    函数 allocUnsafe(大小) {
      断言大小（大小）；
      return createBuffer(size < 0 ? 0 : check(size) | 0);
    }
    Buffer3.allocUnsafe = 函数(大小) {
      返回 allocUnsafe(大小);
    };
    Buffer3.allocUnsafeSlow = 函数（大小）{
      返回 allocUnsafe(大小);
    };
    函数 fromString(字符串, 编码) {
      if (编码类型!== "字符串" || 编码 === "") {
        编码=“utf8”；
      }
      if (!Buffer3.isEncoding(编码)) {
        throw new TypeError("未知编码：" + 编码);
      }
      const 长度 = byteLength(字符串, 编码) | 0;
      让 buf = createBuffer(长度);
      const实际= buf.write（字符串，编码）；
      if（实际！==长度）{
        buf = buf.slice(0, 实际);
      }
      返回缓冲区；
    }
    函数 fromArrayLike(数组) {
      const 长度 = array.length < 0 ? 0：选中（数组长度）| 0;
      const buf = createBuffer(长度);
      for (令 i = 0; i < 长度; i += 1) {
        buf[i] = 数组[i] & 255;
      }
      返回缓冲区；
    }
    函数 fromArrayView(arrayView) {
      if (isInstance(arrayView, Uint8Array)) {
        const copy = new Uint8Array(arrayView);
        return fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength);
      }
      从ArrayLike（arrayView）返回；
    }
    函数 fromArrayBuffer(数组, byteOffset, 长度) {
      if (byteOffset < 0 || array.byteLength < byteOffset) {
        throw new RangeError('“偏移量”超出缓冲区范围');
      }
      if (array.byteLength < byteOffset + (长度 || 0)) {
        throw new RangeError('“长度”超出缓冲区范围');
      }
      让buf；
      if (byteOffset === void 0 && 长度 === void 0) {
        buf = new Uint8Array(数组);
      } 否则 if (长度 === void 0) {
        buf = new Uint8Array(数组, byteOffset);
      } 别的 {
        buf = new Uint8Array(数组, byteOffset, 长度);
      }
      Object.setPrototypeOf(buf, Buffer3.prototype);
      返回缓冲区；
    }
    函数 fromObject(obj) {
      if (Buffer3.isBuffer(obj)) {
        const len = 检查(obj.length) | 0;
        const buf = createBuffer(len);
        if (buf.length === 0) {
          返回缓冲区；
        }
        obj.copy(buf, 0, 0, len);
        返回缓冲区；
      }
      if (obj.length !== void 0) {
        if (typeof obj.length !== "number" || numberIsNaN(obj.length)) {
          返回创建缓冲区（0）；
        }
        从ArrayLike(obj)返回；
      }
      if (obj.type === "Buffer" && Array.isArray(obj.data)) {
        return fromArrayLike(obj.data);
      }
    }
    函数检查（长度）{
      如果（长度> = K_MAX_LENGTH）{
        throw new RangeError("尝试分配大于最大大小的缓冲区：0x" + K_MAX_LENGTH.toString(16) + " bytes");
      }
      返回长度| 0;
    }
    函数 SlowBuffer(长度) {
      如果（+长度！=长度）{
        长度=0；
      }
      返回 Buffer3.alloc(+length);
    }
    Buffer3.isBuffer = 函数 isBuffer(b) {
      return b != null && b._isBuffer === true && b !== Buffer3.prototype;
    };
    Buffer3.compare = 函数比较(a, b) {
      if (isInstance(a, Uint8Array))
        a = Buffer3.from(a, a.offset, a.byteLength);
      if (isInstance(b, Uint8Array))
        b = Buffer3.from(b, b.offset, b.byteLength);
      if (!Buffer3.isBuffer(a) || !Buffer3.isBuffer(b)) {
        抛出新的类型错误（
          '“buf1”、“buf2”参数必须是 Buffer 或 Uint8Array 类型之一'
        ）；
      }
      如果（a === b）
        返回0；
      让 x = a.length;
      让 y = b.length;
      for (让 i = 0, len = Math.min(x, y); i < len; ++i) {
        if (a[i] !== b[i]) {
          x = a[i];
          y = b[i];
          休息;
        }
      }
      如果 (x < y)
        返回-1；
      如果 (y < x)
        返回1；
      返回0；
    };
    Buffer3.isEncoding = 函数 isEncoding(编码) {
      开关（字符串（编码）.toLowerCase（））{
        案例“十六进制”：
        案例“utf8”：
        案例“utf-8”：
        案例“ascii”：
        案例“拉丁1”：
        案例“二进制”：
        案例“base64”：
        案例“ucs2”：
        案例“ucs-2”：
        案例“utf16le”：
        案例“utf-16le”：
          返回真；
        默认：
          返回假；
      }
    };
    Buffer3.concat = 函数 concat(列表, 长度) {
      if (!Array.isArray(list)) {
        throw new TypeError('"list" 参数必须是缓冲区数组');
      }
      if (list.length === 0) {
        返回 Buffer3.alloc(0);
      }
      让我；
      如果（长度===无效0）{
        长度=0；
        for (i = 0; i < 列表长度; ++i) {
          长度+=列表[i].长度；
        }
      }
      const buffer = Buffer3.allocUnsafe(length);
      让 pos = 0;
      for (i = 0; i < 列表长度; ++i) {
        让 buf = 列表[i];
        if (isInstance(buf, Uint8Array)) {
          if (pos + buf.length > buffer.length) {
            if (!Buffer3.isBuffer(buf))
              buf = Buffer3.from(buf);
            buf.copy（缓冲区，pos）；
          } 别的 {
            Uint8Array.prototype.set.call(
              缓冲，
              缓冲液，
              位置
            ）；
          }
        } else if (!Buffer3.isBuffer(buf)) {
          throw new TypeError('"list" 参数必须是缓冲区数组');
        } 别的 {
          buf.copy（缓冲区，pos）；
        }
        pos += buf.length;
      }
      返回缓冲区；
    };
    函数 byteLength(字符串, 编码) {
      if (Buffer3.isBuffer(字符串)) {
        返回字符串的长度；
      }
      if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) {
        返回字符串.byteLength；
      }
      if (typeof string !== "string") {
        抛出新的类型错误（
          '“string”参数必须是 string、Buffer 或 ArrayBuffer 类型之一。收到类型 ' + typeof 字符串
        ）；
      }
      const len = 字符串长度；
      const MustMatch = argument.length > 2 && argument[2] === true;
      if (!mustMatch && len === 0)
        返回0；
      让 loweredCase = false;
      为了 （; ; ） {
        开关（编码）{
          案例“ascii”：
          案例“拉丁1”：
          案例“二进制”：
            返回长度；
          案例“utf8”：
          案例“utf-8”：
            返回 utf8ToBytes(string).length;
          案例“ucs2”：
          案例“ucs-2”：
          案例“utf16le”：
          案例“utf-16le”：
            返回长度*2；
          案例“十六进制”：
            返回长度>>> 1；
          案例“base64”：
            返回 base64ToBytes(string).length;
          默认：
            if (lowedCase) {
              返回必须匹配？-1 : utf8ToBytes(string).length;
            }
            编码 = ("" + 编码).toLowerCase();
            降低大小写 = true;
        }
      }
    }
    Buffer3.byteLength = byteLength;
    函数slowToString（编码，开始，结束）{
      让 loweredCase = false;
      if (start === void 0 || start < 0) {
        开始=0；
      }
      if (开始 > this.length) {
        返回 ””;
      }
      if (end === void 0 || end > this.length) {
        结束= this.length;
      }
      如果（结束 <= 0）{
        返回 ””;
      }
      结束 >>>= 0;
      开始 >>>= 0;
      如果（结束 <= 开始）{
        返回 ””;
      }
      if (!编码)
        编码=“utf8”；
      而（真）{
        开关（编码）{
          案例“十六进制”：
            返回 hexSlice(this, 开始, 结束);
          案例“utf8”：
          案例“utf-8”：
            返回 utf8Slice(this, 开始, 结束);
          案例“ascii”：
            返回 asciiSlice(this, 开始, 结束);
          案例“拉丁1”：
          案例“二进制”：
            返回 latin1Slice(this, 开始, 结束);
          案例“base64”：
            返回base64Slice（本，开始，结束）；
          案例“ucs2”：
          案例“ucs-2”：
          案例“utf16le”：
          案例“utf-16le”：
            返回 utf16leSlice(this, 开始, 结束);
          默认：
            if（小写）
              throw new TypeError("未知编码：" + 编码);
            编码 = (编码 + "").toLowerCase();
            降低大小写 = true;
        }
      }
    }
    Buffer3.prototype._isBuffer = true;
    函数交换（b，n，m）{
      常量 i = b[n];
      b[n] = b[m]；
      b[m] = 我；
    }
    Buffer3.prototype.swap16 = 函数 swap16() {
      const len = this.length;
      if (len % 2 !== 0) {
        throw new RangeError("缓冲区大小必须是 16 位的倍数");
      }
      for (令 i = 0; i < len; i += 2) {
        交换（这个，我，我+ 1）；
      }
      返回这个；
    };
    Buffer3.prototype.swap32 = 函数 swap32() {
      const len = this.length;
      if (len % 4 !== 0) {
        throw new RangeError("缓冲区大小必须是 32 位的倍数");
      }
      for (令 i = 0; i < len; i += 4) {
        交换（这个，我，我+ 3）；
        交换（这个，i + 1，i + 2）；
      }
      返回这个；
    };
    Buffer3.prototype.swap64 = 函数 swap64() {
      const len = this.length;
      if (len % 8 !== 0) {
        throw new RangeError("缓冲区大小必须是 64 位的倍数");
      }
      for (令 i = 0; i < len; i += 8) {
        交换（这个，我，我+ 7）；
        交换（这个，i + 1，i + 6）；
        交换（这个，i + 2，i + 5）；
        交换（这个，i + 3，i + 4）；
      }
      返回这个；
    };
    Buffer3.prototype.toString = 函数 toString() {
      const 长度 = this.length;
      如果（长度=== 0）
        返回 ””;
      if (arguments.length === 0)
        返回 utf8Slice(this, 0, 长度);
      return SlowToString.apply(this, 参数);
    };
    Buffer3.prototype.toLocaleString = Buffer3.prototype.toString;
    Buffer3.prototype.equals = 函数 equals(b) {
      if (!Buffer3.isBuffer(b))
        throw new TypeError("参数必须是缓冲区");
      如果（这 === b）
        返回真；
      返回 Buffer3.compare(this, b) === 0;
    };
    Buffer3.prototype.inspect = 函数检查() {
      让str =“”；
      const max = Exports.INSPECT_MAX_BYTES;
      str = this.toString("hex", 0, max).replace(/(.{2})/g, "$1 ").trim();
      if (this.length > 最大)
        str +=“...”；
      返回“<缓冲区”+str+“>”；
    };
    如果（自定义检查符号）{
      Buffer3.prototype[customInspectSymbol] = Buffer3.prototype.inspect;
    }
    Buffer3.prototype.compare = 函数compare(target, start, end, thisStart, thisEnd) {
      if (isInstance(目标, Uint8Array)) {
        target = Buffer3.from(target, target.offset, target.byteLength);
      }
      if (!Buffer3.isBuffer(目标)) {
        抛出新的类型错误（
          '“目标”参数必须是 Buffer 或 Uint8Array 类型之一。收到类型 ' + typeof 目标
        ）；
      }
      如果（开始===无效0）{
        开始=0；
      }
      如果（结束===无效0）{
        结束=目标？目标长度：0；
      }
      if (thisStart === void 0) {
        这个开始 = 0;
      }
      如果（thisEnd ===无效0）{
        thisEnd = this.length;
      }
      if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
        throw new RangeError("索引超出范围");
      }
      if (thisStart >= thisEnd && 开始 >= 结束) {
        返回0；
      }
      if (thisStart >= thisEnd) {
        返回-1；
      }
      如果（开始>=结束）{
        返回1；
      }
      开始 >>>= 0;
      结束 >>>= 0;
      这个开始 >>>= 0;
      这个结束 >>>= 0;
      if（这个===目标）
        返回0；
      让x = thisEnd - thisStart;
      让 y = 结束 - 开始；
      const len = Math.min(x, y);
      const thisCopy = this.slice(thisStart, thisEnd);
      const targetCopy = target.slice(开始, 结束);
      for (令 i = 0; i < len; ++i) {
        if (thisCopy[i] !== targetCopy[i]) {
          x = thisCopy[i];
          y = 目标复制[i];
          休息;
        }
      }
      如果 (x < y)
        返回-1；
      如果 (y < x)
        返回1；
      返回0；
    };
    函数 bidirectionIndexOf(buffer, val, byteOffset, 编码, dir) {
      if (buffer.length === 0)
        返回-1；
      if (typeof byteOffset === "字符串") {
        编码=字节偏移；
        字节偏移量=0；
      } 否则 if (byteOffset > 2147483647) {
        字节偏移=2147483647；
      } else if (byteOffset < -2147483648) {
        字节偏移=-2147483648；
      }
      字节偏移量=+字节偏移量；
      if (numberIsNaN(byteOffset)) {
        字节偏移量 = 目录？0 : 缓冲区长度 - 1;
      }
      if (字节偏移量 < 0)
        byteOffset = buffer.length + byteOffset;
      if (byteOffset >= buffer.length) {
        如果（目录）
          返回-1；
        别的
          byteOffset = buffer.length - 1;
      } 否则 if (byteOffset < 0) {
        如果（目录）
          字节偏移量=0；
        别的
          返回-1；
      }
      if (typeof val === "字符串") {
        val = Buffer3.from(val, 编码);
      }
      如果 (Buffer3.isBuffer(val)) {
        if (val.length === 0) {
          返回-1；
        }
        返回 arrayIndexOf(buffer, val, byteOffset, 编码, dir);
      } else if (typeof val === "数字") {
        值=值&255；
        if (typeof Uint8Array.prototype.indexOf === "函数") {
          如果（目录）{
            返回 Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
          } 别的 {
            返回 Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
          }
        }
        返回 arrayIndexOf(buffer, [val], byteOffset, 编码, dir);
      }
      throw new TypeError("val 必须是字符串、数字或缓冲区");
    }
    函数 arrayIndexOf(arr, val, byteOffset, 编码, dir) {
      让索引大小= 1；
      让 arrLength = arr.length;
      让 valLength = val.length;
      if (编码!== void 0) {
        编码 = String(编码).toLowerCase();
        if (编码 === "ucs2" || 编码 === "ucs-2" || 编码 === "utf16le" || 编码 === "utf-16le") {
          if (arr.length < 2 || val.length < 2) {
            返回-1；
          }
          索引大小=2；
          arr长度 /= 2;
          值长度 /= 2;
          字节偏移量 /= 2;
        }
      }
      函数读取（buf，i2）{
        if (indexSize === 1) {
          返回buf[i2]；
        } 别的 {
          返回 buf.readUInt16BE(i2 * indexSize);
        }
      }
      让我；
      如果（目录）{
        让 findIndex = -1;
        for (i = byteOffset; i < arrLength; i++) {
          if (read(arr, i) === read(val,foundIndex === -1 ? 0 : i -foundIndex)) {
            if (foundIndex === -1)
              发现索引 = i;
            if (i - findIndex + 1 === valLength)
              返回找到的索引 * 索引大小；
          } 别的 {
            if (foundIndex !== -1)
              i -= i - 找到索引；
            发现索引 = -1;
          }
        }
      } 别的 {
        if (byteOffset + valLength > arrLength)
          byteOffset = arrLength - valLength;
        for (i = byteOffset; i >= 0; i--) {
          让发现=真；
          for (让 j = 0; j < valLength; j++) {
            if (read(arr, i + j) !== read(val, j)) {
              发现=假；
              休息;
            }
          }
          如果（找到）
            返回我；
        }
      }
      返回-1；
    }
    Buffer3.prototype.includes = 函数includes(val, byteOffset, 编码) {
      return this.indexOf(val, byteOffset, 编码) !== -1;
    };
    Buffer3.prototype.indexOf = 函数indexOf(val, byteOffset, 编码) {
      返回双向索引（this，val，byteOffset，编码，true）；
    };
    Buffer3.prototype.lastIndexOf = 函数lastIndexOf(val, byteOffset, 编码) {
      返回 bi DirectionIndexOf(this, val, byteOffset, 编码, false);
    };
    函数 hexWrite(buf, 字符串, 偏移量, 长度) {
      偏移量=数字（偏移量）|| 0;
      const 剩余 = buf.length - 偏移量；
      如果（！长度）{
        长度=剩余；
      } 别的 {
        长度=数字（长度）；
        如果（长度>剩余）{
          长度=剩余；
        }
      }
      const strLen = string.length;
      如果（长度> strLen / 2）{
        长度=strLen/2；
      }
      让我；
      for (i = 0; i < 长度; ++i) {
        const parsed = parseInt(string.substr(i * 2, 2), 16);
        if (numberIsNaN(已解析))
          返回我；
        buf[偏移量 + i] = 已解析；
      }
      返回我；
    }
    函数 utf8Write(buf, 字符串, 偏移量, 长度) {
      返回 blitBuffer(utf8ToBytes(字符串, buf.length - 偏移量), buf, 偏移量, 长度);
    }
    函数 asciiWrite(buf, 字符串, 偏移量, 长度) {
      返回 blitBuffer(asciiToBytes(string), buf, 偏移量, 长度);
    }
    函数base64Write（buf，字符串，偏移量，长度）{
      返回 blitBuffer(base64ToBytes(string), buf, 偏移量, 长度);
    }
    函数 ucs2Write(buf, 字符串, 偏移量, 长度) {
      返回 blitBuffer(utf16leToBytes(字符串, buf.length - 偏移量), buf, 偏移量, 长度);
    }
    Buffer3.prototype.write = 函数 write(字符串、偏移量、长度、编码) {
      如果（偏移===无效0）{
        编码=“utf8”；
        长度 = this.length;
        偏移量=0；
      } else if (length === void 0 && typeof offset === "string") {
        编码=偏移量；
        长度 = this.length;
        偏移量=0；
      } else if (isFinite(offset)) {
        偏移量 = 偏移量 >>> 0;
        如果（isFinite（长度））{
          长度=长度>>> 0；
          if (编码 === void 0)
            编码=“utf8”；
        } 别的 {
          编码=长度；
          长度=无效0；
        }
      } 别的 {
        抛出新的错误（
          “不再支持 Buffer.write(string、encoding、offset[, length])”
        ）；
      }
      const 剩余 = this.length - 偏移量；
      if (长度 === void 0 || 长度 > 剩余)
        长度=剩余；
      if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) {
        throw new RangeError("尝试在缓冲区边界之外写入");
      }
      if (!编码)
        编码=“utf8”；
      让 loweredCase = false;
      为了 （; ; ） {
        开关（编码）{
          案例“十六进制”：
            返回 hexWrite(this, 字符串, 偏移量, 长度);
          案例“utf8”：
          案例“utf-8”：
            返回 utf8Write(this, 字符串, 偏移量, 长度);
          案例“ascii”：
          案例“拉丁1”：
          案例“二进制”：
            返回 asciiWrite(this, 字符串, 偏移量, 长度);
          案例“base64”：
            返回 base64Write(this, 字符串, 偏移量, 长度);
          案例“ucs2”：
          案例“ucs-2”：
          案例“utf16le”：
          案例“utf-16le”：
            返回 ucs2Write(this, 字符串, 偏移量, 长度);
          默认：
            if（小写）
              throw new TypeError("未知编码：" + 编码);
            编码 = ("" + 编码).toLowerCase();
            降低大小写 = true;
        }
      }
    };
    Buffer3.prototype.toJSON = 函数 toJSON() {
      返回 {
        类型：“缓冲区”，
        数据：Array.prototype.slice.call(this._arr || this, 0)
      };
    };
    函数base64Slice（buf，开始，结束）{
      if (start === 0 && end === buf.length) {
        返回base64.fromByteArray(buf);
      } 别的 {
        return base64.fromByteArray(buf.slice(start, end));
      }
    }
    函数 utf8Slice(buf, 开始, 结束) {
      end = Math.min(buf.length, end);
      常量资源 = [];
      让我=开始；
      而（我<结束）{
        const 第一个字节 = buf[i];
        让代码点=空；
        让 bytesPerSequence = 第一个字节 > 239 ？4：第一个字节> 223？3：第一个字节> 191？2：1；
        if (i + bytesPerSequence <= end) {
          让第二个字节，第三个字节，第四个字节，tempCodePoint；
          开关（bytesPerSequence）{
            情况1：
              if (第一个字节 < 128) {
                代码点 = 第一个字节；
              }
              休息;
            案例2：
              第二字节 = buf[i + 1];
              if ((第二字节 & 192) === 128) {
                临时代码点 = (firstByte & 31) << 6 | 第二个字节 & 63;
                if (tempCodePoint > 127) {
                  代码点 = 临时代码点；
                }
              }
              休息;
            案例3：
              第二字节 = buf[i + 1];
              第三字节 = buf[i + 2];
              if ((第二字节 & 192) === 128 && (第三字节 & 192) === 128) {
                临时代码点 = (firstByte & 15) << 12 | (第二字节 & 63) << 6 | 第三字节 & 63;
                if (tempCodePoint > 2047 && (tempCodePoint < 55296 || tempCodePoint > 57343)) {
                  代码点 = 临时代码点；
                }
              }
              休息;
            案例4：
              第二字节 = buf[i + 1];
              第三字节 = buf[i + 2];
              第四字节 = buf[i + 3];
              if ((第二字节 & 192) === 128 && (第三字节 & 192) === 128 && (第四字节 & 192) === 128) {
                临时代码点 = (firstByte & 15) << 18 | (第二字节 & 63) << 12 | (第三字节 & 63) << 6 | 第四字节 & 63;
                if (tempCodePoint > 65535 && tempCodePoint < 1114112) {
                  代码点 = 临时代码点；
                }
              }
          }
        }
        if (codePoint === null) {
          代码点=65533；
          每个序列的字节数 = 1；
        } else if (codePoint > 65535) {
          代码点 -= 65536;
          res.push(codePoint >>> 10 & 1023 | 55296);
          代码点 = 56320 | 代码点 & 1023;
        }
        res.push(codePoint);
        i += 每个序列的字节数；
      }
      返回解码代码点数组（res）；
    }
    var 最大参数长度 = 4096;
    函数解码CodePointsArray（codePoints）{
      const len = codePoints.length；
      如果（len <= MAX_ARGUMENTS_LENGTH）{
        return String.fromCharCode.apply(String, codePoints);
      }
      让 res = "";
      让我= 0;
      while (i < len) {
        res += String.fromCharCode.apply(
          细绳，
          codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
        ）；
      }
      返回资源；
    }
    函数 asciiSlice(buf, 开始, 结束) {
      让 ret = "";
      end = Math.min(buf.length, end);
      for (让 i = 开始; i < 结束; ++i) {
        ret += String.fromCharCode(buf[i] & 127);
      }
      返回ret；
    }
    函数 latin1Slice(buf, 开始, 结束) {
      让 ret = "";
      end = Math.min(buf.length, end);
      for (让 i = 开始; i < 结束; ++i) {
        ret += String.fromCharCode(buf[i]);
      }
      返回ret；
    }
    函数 hexSlice(buf, 开始, 结束) {
      const len = buf.length;
      if (!开始 || 开始 < 0)
        开始=0；
      if (!end || end < 0 || end > len)
        结束=长度；
      让出去=“”；
      for (让 i = 开始; i < 结束; ++i) {
        out += hexSliceLookupTable[buf[i]];
      }
      返回；
    }
    函数 utf16leSlice(buf, 开始, 结束) {
      const bytes = buf.slice(开始, 结束);
      让 res = "";
      for (让 i = 0; i < bytes.length - 1; i += 2) {
        res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
      }
      返回资源；
    }
    Buffer3.prototype.slice = 函数 slice(start, end) {
      const len = this.length;
      开始=~~开始；
      结束=结束===无效0？长度：~~结束；
      如果（开始<0）{
        开始+=长度；
        如果（开始 < 0）
          开始=0；
      } else if (开始> len) {
        开始=长度；
      }
      如果（结束<0）{
        结束+=长度；
        如果（结束 < 0）
          结束= 0；
      } else if (end > len) {
        结束=长度；
      }
      如果（结束 < 开始）
        结束=开始；
      const newBuf = this.subarray(开始, 结束);
      Object.setPrototypeOf(newBuf, Buffer3.prototype);
      返回新的Buf；
    };
    函数 checkOffset（偏移量，扩展，长度）{
      if (偏移量 % 1 !== 0 || 偏移量 < 0)
        throw new RangeError("偏移量不是 uint");
      if（偏移量+扩展>长度）
        throw new RangeError("尝试访问超出缓冲区长度");
    }
    Buffer3.prototype.readUintLE = Buffer3.prototype.readUIntLE = 函数 readUIntLE(offset, byteLength2, noAssert) {
      偏移量 = 偏移量 >>> 0;
      字节长度2 = 字节长度2 >>> 0;
      if (!noAssert)
        checkOffset(偏移量, byteLength2, this.length);
      让 val = this[偏移];
      让 mul = 1;
      让我= 0;
      while (++i < byteLength2 && (mul *= 256)) {
        val += this[偏移量 + i] * mul;
      }
      返回值；
    };
    Buffer3.prototype.readUintBE = Buffer3.prototype.readUIntBE = 函数 readUIntBE(offset, byteLength2, noAssert) {
      偏移量 = 偏移量 >>> 0;
      字节长度2 = 字节长度2 >>> 0;
      如果（！noAssert）{
        checkOffset(偏移量, byteLength2, this.length);
      }
      让 val = this[偏移量 + --byteLength2];
      让 mul = 1;
      while (byteLength2 > 0 && (mul *= 256)) {
        val += this[offset + --byteLength2] * mul;
      }
      返回值；
    };
    Buffer3.prototype.readUint8 = Buffer3.prototype.readUInt8 = 函数 readUInt8(offset, noAssert) {
      偏移量 = 偏移量 >>> 0;
      if (!noAssert)
        checkOffset(偏移量, 1, this.length);
      返回这个[偏移量]；
    };
    Buffer3.prototype.readUint16LE = Buffer3.prototype.readUInt16LE = 函数 readUInt16LE(offset, noAssert) {
      偏移量 = 偏移量 >>> 0;
      if (!noAssert)
        checkOffset(offset, 2, this.length);
      返回此[偏移] | this[偏移量 + 1] << 8;
    };
    Buffer3.prototype.readUint16BE = Buffer3.prototype.readUInt16BE = 函数 readUInt16BE(offset, noAssert) {
      偏移量 = 偏移量 >>> 0;
      if (!noAssert)
        checkOffset(offset, 2, this.length);
      返回此[偏移量] << 8 | 这个[偏移量+1]；
    };
    Buffer3.prototype.readUint32LE = Buffer3.prototype.readUInt32LE = 函数 readUInt32LE(offset, noAssert) {
      偏移量 = 偏移量 >>> 0;
      if (!noAssert)
        checkOffset(offset, 4, this.length);
      return (这个[偏移量] | 这个[偏移量 + 1] << 8 | 这个[偏移量 + 2] << 16) + 这个[偏移量 + 3] * 16777216;
    };
    Buffer3.prototype.readUint32BE = Buffer3.prototype.readUInt32BE = 函数 readUInt32BE(offset, noAssert) {
      偏移量 = 偏移量 >>> 0;
      if (!noAssert)
        checkOffset(offset, 4, this.length);
      返回这个[偏移量] * 16777216 + (这个[偏移量+ 1] << 16 | 这个[偏移量+ 2] << 8 | 这个[偏移量+ 3]);
    };
    Buffer3.prototype.readBigUInt64LE = DefineBigIntMethod(函数 readBigUInt64LE(offset) {
      偏移量 = 偏移量 >>> 0;
      validateNumber(偏移量, "偏移量");
      const 首先 = this[偏移];
      const 最后 = this[偏移量 + 7];
      if (第一个 === void 0 || 最后 === void 0) {
        boundsError(偏移量, this.length - 8);
      }
      const lo = 第一个 + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24;
      const hi = this[++offset] + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + 最后 * 2 ** 24;
      返回 BigInt(lo) + (BigInt(hi) << BigInt(32));
    });
    Buffer3.prototype.readBigUInt64BE = DefineBigIntMethod(函数 readBigUInt64BE(offset) {
      偏移量 = 偏移量 >>> 0;
      validateNumber(偏移量, "偏移量");
      const 首先 = this[偏移];
      const 最后 = this[偏移量 + 7];
      if (第一个 === void 0 || 最后 === void 0) {
        boundsError(偏移量, this.length - 8);
      }
      const hi = 第一个 * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + this[++offset];
      const lo = this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + 最后；
      return (BigInt(hi) << BigInt(32)) + BigInt(lo);
    });
    Buffer3.prototype.readIntLE = 函数 readIntLE(offset, byteLength2, noAssert) {
      偏移量 = 偏移量 >>> 0;
      字节长度2 = 字节长度2 >>> 0;
      if (!noAssert)
        checkOffset(偏移量, byteLength2, this.length);
      让 val = this[偏移];
      让 mul = 1;
      让我= 0;
      while (++i < byteLength2 && (mul *= 256)) {
        val += this[偏移量 + i] * mul;
      }
      乘数*= 128；
      如果（val >= mul）
        val -= Math.pow(2, 8 * byteLength2);
      返回值；
    };
    Buffer3.prototype.readIntBE = 函数 readIntBE(offset, byteLength2, noAssert) {
      偏移量 = 偏移量 >>> 0;
      字节长度2 = 字节长度2 >>> 0;
      if (!noAssert)
        checkOffset(偏移量, byteLength2, this.length);
      让我=字节长度2；
      让 mul = 1;
      让 val = this[偏移量 + --i];
      while (i > 0 && (mul *= 256)) {
        val += this[偏移量 + --i] * mul;
      }
      乘数*= 128；
      如果（val >= mul）
        val -= Math.pow(2, 8 * byteLength2);
      返回值；
    };
    Buffer3.prototype.readInt8 = 函数 readInt8(offset, noAssert) {
      偏移量 = 偏移量 >>> 0;
      if (!noAssert)
        checkOffset(偏移量, 1, this.length);
      if (!(这个[偏移] & 128))
        返回这个[偏移量]；
      return (255 - this[偏移] + 1) * -1;
    };
    Buffer3.prototype.readInt16LE = 函数 readInt16LE(offset, noAssert) {
      偏移量 = 偏移量 >>> 0;
      if (!noAssert)
        checkOffset(offset, 2, this.length);
      const val = this[偏移] | this[偏移量 + 1] << 8;
      返回值&32768？值| 4294901760：值；
    };
    Buffer3.prototype.readInt16BE = 函数 readInt16BE(offset, noAssert) {
      偏移量 = 偏移量 >>> 0;
      if (!noAssert)
        checkOffset(offset, 2, this.length);
      const val = this[偏移量 + 1] | 这个[偏移量] << 8;
      返回值&32768？值| 4294901760：值；
    };
    Buffer3.prototype.readInt32LE = 函数 readInt32LE(offset, noAssert) {
      偏移量 = 偏移量 >>> 0;
      if (!noAssert)
        checkOffset(offset, 4, this.length);
      返回此[偏移] | this[偏移量 + 1] << 8 | this[偏移量 + 2] << 16 | this[偏移量 + 3] << 24;
    };
    Buffer3.prototype.readInt32BE = 函数 readInt32BE(offset, noAssert) {
      偏移量 = 偏移量 >>> 0;
      if (!noAssert)
        checkOffset(offset, 4, this.length);
      返回此[偏移] << 24 | this[偏移量 + 1] << 16 | this[偏移量 + 2] << 8 | 这个[偏移量+3]；
    };
    Buffer3.prototype.readBigInt64LE = DefineBigIntMethod(函数 readBigInt64LE(offset) {
      偏移量 = 偏移量 >>> 0;
      validateNumber(偏移量, "偏移量");
      const 首先 = this[偏移];
      const 最后 = this[偏移量 + 7];
      if (第一个 === void 0 || 最后 === void 0) {
        boundsError(偏移量, this.length - 8);
      }
      const val = this[偏移量 + 4] + this[偏移量 + 5] * 2 ** 8 + this[偏移量 + 6] * 2 ** 16 + (最后 << 24);
      return (BigInt(val) << BigInt(32)) + BigInt(第一个 + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24);
    });
    Buffer3.prototype.readBigInt64BE = DefineBigIntMethod(函数 readBigInt64BE(offset) {
      偏移量 = 偏移量 >>> 0;
      validateNumber(偏移量, "偏移量");
      const 首先 = this[偏移];
      const 最后 = this[偏移量 + 7];
      if (第一个 === void 0 || 最后 === void 0) {
        boundsError(偏移量, this.length - 8);
      }
      const val = (first << 24) + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + this[++offset];
      return (BigInt(val) << BigInt(32)) + BigInt(this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + 最后);
    });
    Buffer3.prototype.readFloatLE = 函数 readFloatLE(offset, noAssert) {
      偏移量 = 偏移量 >>> 0;
      if (!noAssert)
        checkOffset(offset, 4, this.length);
      返回 ieee754.read(this, offset, true, 23, 4);
    };
    Buffer3.prototype.readFloatBE = 函数 readFloatBE(offset, noAssert) {
      偏移量 = 偏移量 >>> 0;
      if (!noAssert)
        checkOffset(offset, 4, this.length);
      返回 ieee754.read(this, 偏移量, false, 23, 4);
    };
    Buffer3.prototype.readDoubleLE = 函数 readDoubleLE(offset, noAssert) {
      偏移量 = 偏移量 >>> 0;
      if (!noAssert)
        checkOffset(offset, 8, this.length);
      返回 ieee754.read(this, 偏移量, true, 52, 8);
    };
    Buffer3.prototype.readDoubleBE = 函数 readDoubleBE(offset, noAssert) {
      偏移量 = 偏移量 >>> 0;
      if (!noAssert)
        checkOffset(offset, 8, this.length);
      返回 ieee754.read(this, 偏移量, false, 52, 8);
    };
    函数 checkInt(buf, 值, 偏移量, ext, 最大值, 最小值) {
      if (!Buffer3.isBuffer(buf))
        throw new TypeError('"buffer" 参数必须是 Buffer 实例');
      if (值 > 最大值 || 值 < 最小值)
        throw new RangeError('“值”参数超出范围');
      if (offset + ext > buf.length)
        throw new RangeError("索引超出范围");
    }
    Buffer3.prototype.writeUintLE = Buffer3.prototype.writeUIntLE = 函数 writeUIntLE(value, offset, byteLength2, noAssert) {
      值=+值；
      偏移量 = 偏移量 >>> 0;
      字节长度2 = 字节长度2 >>> 0;
      如果（！noAssert）{
        const maxBytes = Math.pow(2, 8 * byteLength2) - 1;
        checkInt(this, 值, 偏移量, byteLength2, maxBytes, 0);
      }
      让 mul = 1;
      让我= 0;
      this[偏移] = 值 & 255;
      while (++i < byteLength2 && (mul *= 256)) {
        this[偏移量 + i] = 值 / mul & 255;
      }
      返回偏移量+字节长度2；
    };
    Buffer3.prototype.writeUintBE = Buffer3.prototype.writeUIntBE = 函数 writeUIntBE(value, offset, byteLength2, noAssert) {
      值=+值；
      偏移量 = 偏移量 >>> 0;
      字节长度2 = 字节长度2 >>> 0;
      如果（！noAssert）{
        const maxBytes = Math.pow(2, 8 * byteLength2) - 1;
        checkInt(this, 值, 偏移量, byteLength2, maxBytes, 0);
      }
      让我=字节长度2-1；
      让 mul = 1;
      this[偏移量 + i] = 值 & 255;
      while (--i >= 0 && (mul *= 256)) {
        this[偏移量 + i] = 值 / mul & 255;
      }
      返回偏移量+字节长度2；
    };
    Buffer3.prototype.writeUint8 = Buffer3.prototype.writeUInt8 = 函数 writeUInt8(value, offset, noAssert) {
      值=+值；
      偏移量 = 偏移量 >>> 0;
      if (!noAssert)
        checkInt(这个, 值, 偏移量, 1, 255, 0);
      this[偏移] = 值 & 255;
      返回偏移量+1；
    };
    Buffer3.prototype.writeUint16LE = Buffer3.prototype.writeUInt16LE = 函数 writeUInt16LE(值、偏移量、noAssert) {
      值=+值；
      偏移量 = 偏移量 >>> 0;
      if (!noAssert)
        checkInt(这个, 值, 偏移量, 2, 65535, 0);
      this[偏移] = 值 & 255;
      this[偏移量 + 1] = 值 >>> 8;
      返回偏移量+2；
    };
    Buffer3.prototype.writeUint16BE = Buffer3.prototype.writeUInt16BE = 函数 writeUInt16BE(值、偏移量、noAssert) {
      值=+值；
      偏移量 = 偏移量 >>> 0;
      if (!noAssert)
        checkInt(这个, 值, 偏移量, 2, 65535, 0);
      this[偏移] = 值 >>> 8;
      this[偏移量 + 1] = 值 & 255;
      返回偏移量+2；
    };
    Buffer3.prototype.writeUint32LE = Buffer3.prototype.writeUInt32LE = 函数 writeUInt32LE(值、偏移量、noAssert) {
      值=+值；
      偏移量 = 偏移量 >>> 0;
      if (!noAssert)
        checkInt(这个, 值, 偏移量, 4, 4294967295, 0);
      this[偏移量 + 3] = 值 >>> 24;
      this[偏移量 + 2] = 值 >>> 16;
      this[偏移量 + 1] = 值 >>> 8;
      this[偏移] = 值 & 255;
      返回偏移量+4；
    };
    Buffer3.prototype.writeUint32BE = Buffer3.prototype.writeUInt32BE = 函数 writeUInt32BE(值、偏移量、noAssert) {
      值=+值；
      偏移量 = 偏移量 >>> 0;
      if (!noAssert)
        checkInt(这个, 值, 偏移量, 4, 4294967295, 0);
      this[偏移] = 值>>> 24；
      this[偏移量 + 1] = 值 >>> 16;
      this[偏移量 + 2] = 值 >>> 8;
      this[偏移量 + 3] = 值 & 255;
      返回偏移量+4；
    };
    函数 wrtBigUInt64LE(buf, 值, 偏移量, 最小值, 最大值) {
      checkIntBI（值，最小值，最大值，buf，偏移量，7）；
      让 lo = Number(值 & BigInt(4294967295));
      buf[偏移++] = lo;
      lo = lo >> 8;
      buf[偏移++] = lo;
      lo = lo >> 8;
      buf[偏移++] = lo;
      lo = lo >> 8;
      buf[偏移++] = lo;
      让 hi = Number(值 >> BigInt(32) & BigInt(4294967295));
      buf[偏移++] = hi;
      你好 = 你好 >> 8;
      buf[偏移++] = hi;
      你好 = 你好 >> 8;
      buf[偏移++] = hi;
      你好 = 你好 >> 8;
      buf[偏移++] = hi;
      返回偏移量；
    }
    函数wrtBigUInt64BE（buf，值，偏移量，最小值，最大值）{
      checkIntBI（值，最小值，最大值，buf，偏移量，7）；
      让 lo = Number(值 & BigInt(4294967295));
      buf[偏移量 + 7] = lo;
      lo = lo >> 8;
      buf[偏移量 + 6] = lo;
      lo = lo >> 8;
      buf[偏移量 + 5] = lo;
      lo = lo >> 8;
      buf[偏移量 + 4] = lo;
      让 hi = Number(值 >> BigInt(32) & BigInt(4294967295));
      buf[偏移量 + 3] = hi;
      你好 = 你好 >> 8;
      buf[偏移量 + 2] = hi;
      你好 = 你好 >> 8;
      buf[偏移量 + 1] = hi;
      你好 = 你好 >> 8;
      buf[偏移量] = hi;
      返回偏移量+8；
    }
    Buffer3.prototype.writeBigUInt64LE = DefineBigIntMethod(函数 writeBigUInt64LE(值, 偏移量 = 0) {
      返回wrtBigUInt64LE（这个，值，偏移量，BigInt（0），BigInt（“0xffffffffffffffff”））;
    });
    Buffer3.prototype.writeBigUInt64BE = DefineBigIntMethod(函数 writeBigUInt64BE(值, 偏移量 = 0) {
      返回wrtBigUInt64BE（这个，值，偏移量，BigInt（0），BigInt（“0xffffffffffffffff”））;
    });
    Buffer3.prototype.writeIntLE = 函数 writeIntLE(value, offset, byteLength2, noAssert) {
      值=+值；
      偏移量 = 偏移量 >>> 0;
      如果（！noAssert）{
        const limit = Math.pow(2, 8 * byteLength2 - 1);
        checkInt(this, 值, 偏移量, byteLength2, limit - 1, -limit);
      }
      让我= 0;
      让 mul = 1;
      让子= 0；
      this[偏移] = 值 & 255;
      while (++i < byteLength2 && (mul *= 256)) {
        if (值 < 0 && sub === 0 && this[偏移量 + i - 1] !== 0) {
          子=1；
        }
        this[offset + i] = (值 / mul >> 0) - sub & 255;
      }
      返回偏移量+字节长度2；
    };
    Buffer3.prototype.writeIntBE = 函数 writeIntBE(value, offset, byteLength2, noAssert) {
      值=+值；
      偏移量 = 偏移量 >>> 0;
      如果（！noAssert）{
        const limit = Math.pow(2, 8 * byteLength2 - 1);
        checkInt(this, 值, 偏移量, byteLength2, limit - 1, -limit);
      }
      让我=字节长度2-1；
      让 mul = 1;
      让子= 0；
      this[偏移量 + i] = 值 & 255;
      while (--i >= 0 && (mul *= 256)) {
        if (值 < 0 && sub === 0 && this[偏移量 + i + 1] !== 0) {
          子=1；
        }
        this[offset + i] = (值 / mul >> 0) - sub & 255;
      }
      返回偏移量+字节长度2；
    };
    Buffer3.prototype.writeInt8 = 函数 writeInt8(值, 偏移量, noAssert) {
      值=+值；
      偏移量 = 偏移量 >>> 0;
      if (!noAssert)
        checkInt(这个, 值, 偏移量, 1, 127, -128);
      如果（值 < 0）
        值 = 255 + 值 + 1；
      this[偏移] = 值 & 255;
      返回偏移量+1；
    };
    Buffer3.prototype.writeInt16LE = 函数 writeInt16LE(值, 偏移量, noAssert) {
      值=+值；
      偏移量 = 偏移量 >>> 0;
      if (!noAssert)
        checkInt(这个, 值, 偏移量, 2, 32767, -32768);
      this[偏移] = 值 & 255;
      this[偏移量 + 1] = 值 >>> 8;
      返回偏移量+2；
    };
    Buffer3.prototype.writeInt16BE = 函数 writeInt16BE(值, 偏移量, noAssert) {
      值=+值；
      偏移量 = 偏移量 >>> 0;
      if (!noAssert)
        checkInt(这个, 值, 偏移量, 2, 32767, -32768);
      this[偏移] = 值 >>> 8;
      this[偏移量 + 1] = 值 & 255;
      返回偏移量+2；
    };
    Buffer3.prototype.writeInt32LE = 函数 writeInt32LE(值, 偏移量, noAssert) {
      值=+值；
      偏移量 = 偏移量 >>> 0;
      if (!noAssert)
        checkInt(这个, 值, 偏移量, 4, 2147483647, -2147483648);
      this[偏移] = 值 & 255;
      this[偏移量 + 1] = 值 >>> 8;
      this[偏移量 + 2] = 值 >>> 16;
      this[偏移量 + 3] = 值 >>> 24;
      返回偏移量+4；
    };
    Buffer3.prototype.writeInt32BE = 函数 writeInt32BE(值, 偏移量, noAssert) {
      值=+值；
      偏移量 = 偏移量 >>> 0;
      if (!noAssert)
        checkInt(这个, 值, 偏移量, 4, 2147483647, -2147483648);
      如果（值 < 0）
        值 = 4294967295 + 值 + 1；
      this[偏移] = 值>>> 24；
      this[偏移量 + 1] = 值 >>> 16;
      this[偏移量 + 2] = 值 >>> 8;
      this[偏移量 + 3] = 值 & 255;
      返回偏移量+4；
    };
    Buffer3.prototype.writeBigInt64LE = DefineBigIntMethod(函数 writeBigInt64LE(值, 偏移量 = 0) {
      返回wrtBigUInt64LE（这个，值，偏移量，-BigInt（“0x8000000000000000”），BigInt（“0x7fffffffffffffff”））;
    });
    Buffer3.prototype.writeBigInt64BE = DefineBigIntMethod(函数 writeBigInt64BE(值, 偏移量 = 0) {
      返回wrtBigUInt64BE（这个，值，偏移量，-BigInt（“0x8000000000000000”），BigInt（“0x7fffffffffffffff”））;
    });
    函数 checkIEEE754(buf, value, offset, ext, max, min) {
      if (offset + ext > buf.length)
        throw new RangeError("索引超出范围");
      如果（偏移量 < 0）
        throw new RangeError("索引超出范围");
    }
    函数writeFloat（buf，值，偏移量，littleEndian，noAssert）{
      值=+值；
      偏移量 = 偏移量 >>> 0;
      如果（！noAssert）{
        checkIEEE754(buf, 值, 偏移量, 4, 34028234663852886e22, -34028234663852886e22);
      }
      ieee754.write(buf, 值, 偏移量, LittleEndian, 23, 4);
      返回偏移量+4；
    }
    Buffer3.prototype.writeFloatLE = 函数 writeFloatLE(value, offset, noAssert) {
      返回 writeFloat(this, 值, 偏移量, true, noAssert);
    };
    Buffer3.prototype.writeFloatBE = 函数 writeFloatBE(值, 偏移量, noAssert) {
      返回 writeFloat(this, 值, 偏移量, false, noAssert);
    };
    函数writeDouble（buf，值，偏移量，littleEndian，noAssert）{
      值=+值；
      偏移量 = 偏移量 >>> 0;
      如果（！noAssert）{
        checkIEEE754(buf, 值, 偏移量, 8, 17976931348623157e292, -17976931348623157e292);
      }
      ieee754.write(buf, 值, 偏移量, LittleEndian, 52, 8);
      返回偏移量+8；
    }
    Buffer3.prototype.writeDoubleLE = 函数 writeDoubleLE(value, offset, noAssert) {
      返回 writeDouble(this, 值, 偏移量, true, noAssert);
    };
    Buffer3.prototype.writeDoubleBE = 函数 writeDoubleBE(value, offset, noAssert) {
      返回 writeDouble(this, 值, 偏移量, false, noAssert);
    };
    Buffer3.prototype.copy = 函数复制(目标, targetStart, 开始, 结束) {
      if (!Buffer3.isBuffer(目标))
        throw new TypeError("参数应该是一个 Buffer");
      如果（！开始）
        开始=0；
      if (!结束 && 结束 !== 0)
        结束= this.length;
      if (目标开始 >= 目标.长度)
        目标开始=目标.长度；
      if (!targetStart)
        目标开始 = 0;
      if (结束 > 0 && 结束 < 开始)
        结束=开始；
      如果（结束===开始）
        返回0；
      if (target.length === 0 || this.length === 0)
        返回0；
      if (目标开始 < 0) {
        throw new RangeError("targetStart 越界");
      }
      if (开始 < 0 || 开始 >= this.length)
        throw new RangeError("索引超出范围");
      如果（结束 < 0）
        throw new RangeError("sourceEnd 越界");
      if (结束 > this.length)
        结束= this.length;
      if (目标.长度 - 目标开始 < 结束 - 开始) {
        结束=目标.长度-目标开始+开始；
      }
      const len = 结束 - 开始；
      if (this === target && typeof Uint8Array.prototype.copyWithin === "function") {
        this.copyWithin(targetStart, 开始, 结束);
      } 别的 {
        Uint8Array.prototype.set.call(
          目标，
          this.subarray(开始,结束),
          目标开始
        ）；
      }
      返回长度；
    };
    Buffer3.prototype.fill = 函数 fill(val, 开始, 结束, 编码) {
      if (typeof val === "字符串") {
        if (typeof start === "字符串") {
          编码=开始；
          开始=0；
          结束= this.length;
        } else if (typeof end === "字符串") {
          编码=结束；
          结束= this.length;
        }
        if (编码!== void 0 && 编码类型!== "字符串") {
          throw new TypeError("编码必须是字符串");
        }
        if (typeof 编码 === "string" && !Buffer3.isEncoding(encoding)) {
          throw new TypeError("未知编码：" + 编码);
        }
        if (val.length === 1) {
          const 代码 = val.charCodeAt(0);
          if (编码 === "utf8" && 代码 < 128 || 编码 === "latin1") {
            值=代码；
          }
        }
      } else if (typeof val === "数字") {
        值=值&255；
      } else if (typeof val === "布尔值") {
        val = 数字(val);
      }
      if (开始 < 0 || this.length < 开始 || this.length < 结束) {
        throw new RangeError("索引超出范围");
      }
      如果（结束 <= 开始）{
        返回这个；
      }
      开始 = 开始 >>> 0;
      结束=结束===无效0？this.length : 结束 >>> 0;
      如果（！val）
        值=0；
      让我；
      if (typeof val === "数字") {
        for (i = 开始; i < 结束; ++i) {
          this[i] = val;
        }
      } 别的 {
        const 字节 = Buffer3.isBuffer(val) ？val : Buffer3.from(val, 编码);
        const len = bytes.length;
        如果（长度=== 0）{
          throw new TypeError('值“' + val + '”对于参数“value”无效');
        }
        for (i = 0; i < 结束 - 开始; ++i) {
          this[i + start] = bytes[i % len];
        }
      }
      返回这个；
    };
    var 错误 = {};
    函数 E(sym, getMessage, Base) {
      错误 [sym] = 类 NodeError 扩展 Base {
        构造函数（）{
          极好的（）;
          Object.defineProperty(this, "消息", {
            值： getMessage.apply(this, 参数),
            可写：真实，
            可配置：真
          });
          this.name = `${this.name} [${sym}]`;
          这个.stack;
          删除这个.name；
        }
        获取代码（）{
          返回符号；
        }
        设置代码（值）{
          Object.defineProperty(this, "代码", {
            可配置：真，
            可枚举：真实，
            价值，
            可写：真
          });
        }
        到字符串（）{
          返回 `${this.name} [${sym}]: ${this.message}`;
        }
      };
    }
    E(
      “ERR_BUFFER_OUT_OF_BOUNDS”，
      函数（名称）{
        如果（姓名）{
          return `${name} 超出缓冲区范围`;
        }
        return "尝试访问缓冲区边界之外的内存";
      },
      范围误差
    ）；
    E(
      “ERR_INVALID_ARG_TYPE”，
      函数（名称，实际）{
        return `“${name}”参数必须是数字类型。收到类型${typeofactual}`;
      },
      类型错误
    ）；
    E(
      “ERR_OUT_OF_RANGE”，
      函数（字符串，范围，输入）{
        let msg = `“${str}”的值超出范围。`;
        让接收=输入；
        if (Number.isInteger(输入) && Math.abs(输入) > 2 ** 32) {
          收到= addNumericalSeparator(字符串(输入));
        } else if (typeof input === "bigint") {
          收到=字符串（输入）；
          if (输入 > BigInt(2) ** BigInt(32) || 输入 < -(BigInt(2) ** BigInt(32))) {
            收到= addNumericalSeparator（收到）；
          }
          收到+=“n”；
        }
        msg += ` 必须是 ${range}。收到${收到}`;
        返回消息；
      },
      范围误差
    ）；
    函数 addNumericalSeparator(val) {
      让 res = "";
      让我= val.length;
      const start = val[0] === "-" ? 1：0；
      for (; i >= 开始 + 4; i -= 3) {
        res = `_${val.slice(i - 3, i)}${res}`;
      }
      返回 `${val.slice(0, i)}${res}`;
    }
    函数 checkBounds(buf, 偏移量, byteLength2) {
      validateNumber(偏移量, "偏移量");
      if (buf[偏移量] === void 0 || buf[偏移量 + byteLength2] === void 0) {
        boundsError(偏移量, buf.length - (byteLength2 + 1));
      }
    }
    函数 checkIntBI(值, 最小值, 最大值, buf, 偏移量, byteLength2) {
      if (值 > 最大值 || 值 < 最小值) {
        const n = typeof min === "bigint" ？“n”：“”；
        让范围；
        if (byteLength2 > 3) {
          if (min === 0 || min === BigInt(0)) {
            范围 = `>= 0${n} 且 < 2${n} ** ${(byteLength2 + 1) * 8}${n}`;
          } 别的 {
            范围 = `>= -(2${n} ** ${(byteLength2 + 1) * 8 - 1}${n}) 和 < 2 ** ${(byteLength2 + 1) * 8 - 1}${ n}`；
          }
        } 别的 {
          范围 = `>= ${min}${n} 且 <= ${max}${n}`；
        }
        抛出新错误。ERR_OUT_OF_RANGE("value", range, value);
      }
      checkBounds(buf, 偏移量, byteLength2);
    }
    函数 validateNumber(值, 名称) {
      if (值类型!== "数字") {
        抛出新错误。ERR_INVALID_ARG_TYPE(name, "number", value);
      }
    }
    函数boundsError（值，长度，类型）{
      if (Math.floor(value) !== value) {
        验证编号（值，类型）；
        抛出新错误。ERR_OUT_OF_RANGE(type || "offset", "an integer", value);
      }
      如果（长度<0）{
        抛出新错误。ERR_BUFFER_OUT_OF_BOUNDS();
      }
      抛出新错误。ERR_OUT_OF_RANGE(
        类型 || “抵消”，
        `>= ${类型？1 : 0} 和 <= ${length}`,
        价值
      ）；
    }
    var INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;
    函数base64clean(str) {
      str = str.split("=")[0];
      str = str.trim().replace(INVALID_BASE64_RE, "");
      if (字符串长度 < 2)
        返回 ””;
      while (str.length % 4 !== 0) {
        字符串=字符串+“=”；
      }
      返回字符串；
    }
    函数 utf8ToBytes(字符串, 单位) {
      单位 = 单位 || 无穷;
      让代码点；
      const 长度 = 字符串.length;
      让 LeadSurrogate = null;
      常量字节=[]；
      for (令 i = 0; i < 长度; ++i) {
        代码点 = string.charCodeAt(i);
        if (代码点 > 55295 && 代码点 < 57344) {
          如果（！leadSurrogate）{
            如果（代码点> 56319）{
              if ((单位 -= 3) > -1)
                字节.push(239, 191, 189);
              继续;
            } else if (i + 1 === 长度) {
              if ((单位 -= 3) > -1)
                字节.push(239, 191, 189);
              继续;
            }
            LeadSurrogate = 代码点；
            继续;
          }
          if (codePoint < 56320) {
            if ((单位 -= 3) > -1)
              字节.push(239, 191, 189);
            LeadSurrogate = 代码点；
            继续;
          }
          代码点 = (leadSurrogate - 55296 << 10 | 代码点 - 56320) + 65536;
        } else if (leadSurrogate) {
          if ((单位 -= 3) > -1)
            字节.push(239, 191, 189);
        }
        引导代理=空；
        if (代码点 < 128) {
          if ((单位 -= 1) < 0)
            休息;
          bytes.push(codePoint);
        } 否则 if (codePoint < 2048) {
          if ((单位 -= 2) < 0)
            休息;
          字节.推(
            代码点 >> 6 | 192、
            代码点 & 63 | 128
          ）；
        } else if (codePoint < 65536) {
          if ((单位 -= 3) < 0)
            休息;
          字节.推(
            代码点 >> 12 | 224、
            代码点 >> 6 和 63 | 128、
            代码点 & 63 | 128
          ）；
        } else if (codePoint < 1114112) {
          if ((单位 -= 4) < 0)
            休息;
          字节.推(
            代码点 >> 18 | 240、
            代码点 >> 12 和 63 | 128、
            代码点 >> 6 和 63 | 128、
            代码点 & 63 | 128
          ）；
        } 别的 {
          throw new Error("无效的代码点");
        }
      }
      返回字节；
    }
    函数 asciiToBytes(str) {
      常量 byteArray = [];
      for (让 i = 0; i < str.length; ++i) {
        byteArray.push(str.charCodeAt(i) & 255);
      }
      返回字节数组；
    }
    函数 utf16leToBytes(str, 单位) {
      让 c、hi、lo；
      常量 byteArray = [];
      for (让 i = 0; i < str.length; ++i) {
        if ((单位 -= 2) < 0)
          休息;
        c = str.charCodeAt(i);
        你好 = c >> 8;
        lo=c%256；
        byteArray.push(lo);
        byteArray.push(嗨);
      }
      返回字节数组；
    }
    函数 base64ToBytes(str) {
      返回base64.toByteArray(base64clean(str));
    }
    函数 blitBuffer(src, dst, 偏移量, 长度) {
      让我；
      for (i = 0; i < 长度; ++i) {
        if (i + offset >= dst.length || i >= src.length)
          休息;
        dst[i + 偏移量] = src[i];
      }
      返回我；
    }
    函数 isInstance(obj, 类型) {
      返回 obj 实例类型 || obj != null && obj.constructor != null && obj.constructor.name != null && obj.constructor.name === type.name;
    }
    函数 numberIsNaN(obj) {
      返回 obj !== obj;
    }
    var hexSliceLookupTable = 函数() {
      const 字母表 = "0123456789abcdef";
      常量表=新数组（256）；
      for (令 i = 0; i < 16; ++i) {
        常量 i16 = i * 16;
        for (令 j = 0; j < 16; ++j) {
          表[i16 + j] = 字母表[i] + 字母表[j];
        }
      }
      返回表；
    }();
    函数定义BigIntMethod(fn) {
      返回类型 BigInt ===“未定义”？BufferBigIntNotDefined : fn;
    }
    函数 BufferBigIntNotDefined() {
      抛出新错误（“不支持 BigInt”）；
    }
  }
});

// src/index.ts
var import_buffer = __toESM(require_buffer(), 1);

var ipProviderLink =“https://raw.githubusercontent.com/vfarid/cf-clean-ips/main/list.json”;
var 地址列表 = [
  “discord.com”，
  “cloudflare.com”，
  “nginx.com”，
  “www.speedtest.com”，
  “laravel.com”，
  “chat.openai.com”，
  “auth0.openai.com”，
  “codepen.io”，
  “api.jquery.com”
];
var fpList = [
  “铬合金”，
  “铬合金”，
  “铬合金”，
  “火狐”，
  “苹果浏览器”，
  “边缘”，
  “ios”，
  “安卓”，
  “随机的”，
  “随机的”
];
var alpnList = [
  “http/1.1”，
  “h2，http/1.1”，
  “h2，http/1.1”
];
var 运算符 = [];
var cleanIPs = [];
var maxConfigs = MAX_CONFIGS;
var includeOriginalConfigs = INCLUDE_ORIGINAL;
var src_default = {
  异步获取（请求）{
    const url = 新 URL(request.url);
    const 路径 = url.pathname.replace(/^\/|\/$/g, "");
    const parts = path.split("/");
    const 类型 = parts[0].toLowerCase();
    如果（类型===“子”）{
      if (parts[1] !== void 0) {
        if (parts[1].includes(".")) {
          cleanIPs = parts[1].toLowerCase().trim().split(",").map((ip2) => {
            return { ip: ip2, 操作员: "IP" };
          });
          运算符= [“IP”]；
        } 别的 {
          尝试 {
            运算符 = parts[1].toUpperCase().trim().split(",");
            cleanIPs =等待 fetch(ipProviderLink).then((r) => r.json()).then((j) => j.ipv4);
            cleanIPs = cleanIPs.filter((el) => Operators.includes(el.operator));
          } 捕获 (e) {
          }
        }
      }
      if (url.searchParams.has("max")) {
        maxConfigs = parseInt(url.searchParams.get("max"));
        如果（！maxConfigs）{
          最大配置=最大配置；
        }
      }
      if (url.searchParams.has("原始")) {
        const 原始 = url.searchParams.get("原始");
        includeOriginalConfigs = ["1", "true", "yes", "y"].includes(original.toLowerCase());
      }
      如果（包括原始配置）{
        maxConfigs = Math.floor(maxConfigs / 2);
      }
      var 配置列表 = [];
      var 可接受的配置列表 = [];
      var 最终配置列表 = [];
      var newConfigs;
      for (configProviders 的 const sub) {
        尝试 {
          新配置=[];
          for (sub.urls 的 const 链接) {
            newConfigs.push(等待 fetch(link).then((r) => r.text()));
            if (sub.type === "b64") {
              newConfigs = import_buffer.Buffer.from(newConfigs, "base64").toString("utf-8");
            }
          }
          newConfigs = newConfigs.join("\n").split("\n");
          可接受的配置列表.push({
            姓名：小名，
            配置： newConfigs.filter((cnf) => cnf.match(/^(vmess|vless|trojan):\/\//i))
          });
          如果（包括原始配置）{
            configList.push({
              姓名：小名，
              配置： newConfigs.filter((cnf) => cnf.match(/^(vmess|vless|trojan|ss|ssr):\/\//i))
            });
          }
        } 捕获 (e) {
        }
      }
      var ipList = [];
      if (!cleanIPs.length) {
        运算符= [“一般”];
        cleanIPs = [{ ip: "", 操作员: "常规" }];
      }
      const configPerList = Math.ceil(maxConfigs /acceptedConfigList.length);
      for（运算符的常量运算符）{
        var ipList = cleanIPs.filter((el) => el.operator == 运算符).slice(0, 5);
        var ip = ipList[Math.floor(Math.random() * ipList.length)].ip;
        for (acceptableConfigList 的 const el) {
          最终配置列表 = 最终配置列表.concat(
            获取多个随机元素（
              el.configs.map(decodeConfig).map((cnf) => mixConfig(cnf, url, ip, 操作符, el.name)).filter((cnf) => !!cnf && cnf.id).map(编码配置).filter((cnf) => !!cnf),
              配置每个列表
            ）
          ）；
        }
      }
      如果（包括原始配置）{
        for (configList 的 const el) {
          最终配置列表 = 最终配置列表.concat(
            获取多个随机元素（
              el.configs.map(decodeConfig).map((cnf) => renameConfig(cnf, el.name)).filter((cnf) =>!!cnf && cnf.id).map(encodeConfig).filter(( cnf) =>!!cnf),
              配置每个列表
            ）
          ）；
        }
      }
      返回新的 Response(import_buffer.Buffer.from(finalConfigList.join("\n"), "utf-8").toString("base64"));
    } 否则如果（路径）{
      var newUrl = new URL("https://" + url.pathname.replace(/^\/|\/$/g, ""));
      返回 fetch(new Request(newUrl, request));
    } 别的 {
      返回新的响应（`<！DOCTYPE html>
<body目录=“rtl”>
  <h3><font color="green">\u0647\u0645\u0647\u0686\u06CC\u062F\u0631\u0633\u062A\u0647</font></h3>
  <p/>
  <p>
    \u0627\u06CC\u0646 \u0644\u06CC\u0646\u06A9 子 \u0631\u0627 \u0647\u0645\u0631\u0627\u0647 \u0628\u0627 \u06A9\u062F \u0627\u067E\u0 631\u0627\u062A\u0648\ u0631\u062F\u0631\u0627\u067E v2ray\u062E\u0648\u062F\u06A9\u067E\u06CC\u06A9\u0646\u06CC\u062F。\u0628\u0631\u0627\u06CC \u0645\u062B\u0627\u0644 \u062F\u0631 \u0647\u0645\u0631\u0627\u0647 \u0627\u0648\u0644 \u0628\u0647 \u0 634\u06A9\u0644\u0632\u06CC \u0631\u062E\u0648\u0627\u0647\u062F\u0628\u0648\u062F：
  </p>
  <p>
    <a href="https://${url.hostname}/sub/mci">https://${url.hostname}/sub/mci</a>
  </p>
  <p>
    \u0648\u06CC\u0627\u0647\u0645\u06CC\u0646\u0644\u06CC\u0646\u06A9\u0631\u0627\u0647\u0645\u0631\u0627\u0647\u0622\u06CC\u200C \u067E\u06CC\u062A\u0645 \u06CC\u0632\u062F\u0631\u0627\u067E\u062E\u0648\u062F\u0627\u0636\u0627\u0641\u0647\u06A9\u0646\u06CC\u062F：
  </p>
  <p>
    <a href="https://${url.hostname}/sub/1.2.3.4">https://${url.hostname}/sub/1.2.3.4</a>
  </p>
  <p>
    \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u06CC\u062F \u0686\u0646\u062F \u0622\u06CC\u200C\u067E\u06CC \u062A\u0645\u06CC\u0632 \ u0631\u0627\u0628\u0627 \u06A9\u0627\u0645\u0627\u062C\u062F\u0627\u06A9\u0646\u06CC\u062F。\u062F\u0631 \u0627\u06CC\u0646 \u0635\u0648\u0631\u062A \u0628\u0631\u0627\u06CC \u0647\u0631 \u0622\u06CC\u200C\u067E\u06CC \u062A \u0645\u06CC\u0632\u0628 \u0647 \u062A\u0639\u062F\u0627\u062F \u0642\u062F\u06CC\u062F \u0634\u062F\u0647\u060C \u06A9\u0627\u0646\u0641\u06CC\u06A9 \u06 2A\u0631\u06A9\u06CC\u0628 \u0634\u062F\u0647\u0628\u0627\u0648\u0631\u06A9\u0631\u062A\u062D\u0648\u06CC\u0644\u0645\u06CC\u062F\u0647\u062F：
  </p>
  <p>
    <a href="https://${url.hostname}/sub/1.2.3.4,9.8.7.6">https://${url.hostname}/sub/1.2.3.4,9.8.7.6</a >
  </p>
  <p>
    \u062F\u0642\u06CC\u0642\u0627\u0628\u0627\u0647\u0645\u06CC\u0646\u0645\u062F\u0644\u0645\u06CC\u200C\u062A\u0648\u0627\u064 6\u06CC\u062F\u062F\u0627 \u0645\u06CC\u0646\u0622\u06CC\u200C\u067E\u06CC\u062A\u0645\u06CC\u0632\u0646\u06CC\u0632\u0627\u0633\u062A\u0641\u0627\u062F\ u0647\u06A9\u0646\u06CC ⑨：
  </p>
  <p>
    <a href="https://${url.hostname}/sub/mci.ircf.space">https://${url.hostname}/sub/mci.ircf.space</a>
  </p>
  <p>
    \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u06CC\u062F \u0627\u0632 \u0686\u0646\u062F \u0633\u0627\u0628\u062F\u0627\u0645\u06 46CC\u0646\u0622\u06CC \u0621\u06CC\u062A\u0645\u06CC\u0632\u0646\u06CC\u0632\u0627\u0633\u062A\u0641\u0627\u062F\u0647\u06A9\u0646\u06CC\u062F：
  </p>
  <p>
    <a href="https://${url.hostname}/sub/mci.ircf.space,my.domain.me">https://${url.hostname}/sub/mci.ircf.space, my.domain.me</a>
  </p>
  <p>
    \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u06CC\u062F \u0628\u0627 \u0645\u062A\u063A\u06CC\u0631最大\u062A\u0639\u062F\u0627\u06 2F\u06A9\u0627\u0646\ u0641\u06CC\u06AF\u0631\u0627\u0645\u0634\u062E\u0635\u06A9\u0646\u06CC\u062F:
  </p>
  <p>
    <a href="https://${url.hostname}/sub/1.2.3.4?max=200">https://${url.hostname}/sub/1.2.3.4?max=200</a >
  </p>
  <p>
    \u0647\u0645\u0686\u0646\u06CC\u0646\u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u06CC\u062F\u0628\u0627\u0645\u062A\u063A\u06CC \u0631原创\u0628\u0627 \ u0639\u062F\u062F 0 \u06CC\u0627 1 \u0648 \u06CC\u0627 \u0628\u0627 是/否 \u0645\u0634\u062E\u0635 \u06A9\u0646\u06CC\u062F \u06A9\u064 7\u06A9\u0627\u0646 \u0641\u06CC\u06AF\u200C\u0647\u0627\u06CC \u0627\u0635\u0644\u06CC (\u062A\u0631\u06A9\u06CC\u0628\u0646\u0634\u062F\u0647\u0628 \u0627\u0648\u0631\ u06A9\u0631)\u0647\u0645\u062F\u0631\u062E\u0631\u0648\u062C\u06CC\u0622\u0648\u0631\u062F\u0647\u0634\u0648\u0646\u062F\u0 6CC\u0627\u0646\u0647：
  </p>
  <p>
    <a href="https://${url.hostname}/sub/1.2.3.4?max=200&original=yes">https://${url.hostname}/sub/1.2.3.4?max=200&original=是的</a>
  </p>
  <p>
    <a href="https://${url.hostname}/sub/1.2.3.4?max=200&original=0">https://${url.hostname}/sub/1.2.3.4?max=200&original= 0</a>
  </p>
</正文>`，{
        标题：{
          “内容类型”：“text/html；字符集=UTF-8”
        }
      });
    }
  }
};
函数encodeConfig（conf）{
  var configStr = null;
  尝试 {
    if (conf.protocol === "vmess") {
      删除conf.protocol；
      configStr = "vmess://" + import_buffer.Buffer.from(JSON.stringify(conf), "utf-8").toString("base64");
    } else if (["vless", "trojan"].includes(conf?.protocol)) {
      configStr = `${conf.protocol}://${conf.id}@${conf.add}:${conf.port}?security=${conf.tls}&type=${conf.type}&path =${encodeURIComponent(conf.path)}&host=${encodeURIComponent(conf.host)}&tls=${conf.tls}&sni=${conf.sni}#${encodeURIComponent(conf.ps)}`;
    }
  } 捕获 (e) {
  }
  返回configStr；
}
函数解码配置（configStr）{
  var 匹配 = null;
  varconf = null；
  if (configStr.startsWith("vmess://")) {
    尝试 {
      conf = JSON.parse(import_buffer.Buffer.from(configStr.substring(8), "base64").toString("utf-8"));
      conf.protocol = “vmess”;
    } 捕获 (e) {
    }
  } else if (match = configStr.match(/^(?<protocol>trojan|vless):\/\/(?<id>.*)@(?<add>.*):(?<port>\ d+)\??(?<选项>.*)#(?<ps>.*)$/)) {
    尝试 {
      const optionsArr = match.groups.options.split("&") ?? []；
      const optionsObj = optionsArr.reduce((obj, option) => {
        const [键，值] = option.split("=");
        obj[key]=decodeURIComponent(value);
        返回对象；
      }, {});
      会议 = {
        协议：match.groups.protocol，
        id: match.groups.id,
        添加：match.groups？.add，
        端口：match.groups.port ?? 443、
        ps: match.groups?.ps,
        类型：optionsObj.type ?? “TCP”，
        主机：optionsObj？.host，
        路径: optionsObj?.path,
        tls: optionsObj.security ?? “没有任何”，
        sni: optionsObj?.sni,
        alpn: optionsObj?.alpn
      };
    } 捕获 (e) {
    }
  }
  返回配置；
}
函数 mixConfig(conf, url, ip, 运营商, 提供商) {
  尝试 {
    if (conf.tls!= "tls") {
      返回 {};
    }
    var addr = conf.sni;
    如果（！地址）{
      if (conf.host && !isIp(conf.host)) {
        地址=conf.host；
      } else if (conf.add && !isIp(conf.add)) {
        地址=conf.add;
      }
    }
    如果（！地址）{
      返回 {};
    }
    if (addr.endsWith(".workers.dev")) {
      const part1 = conf.path.split("/").pop();
      constpart2=conf.path.substring(0,conf.path.length-part1.length-1);
      变量路径；
      if (part1.includes(":")) {
        addr = part1.replace(/^\//g, "").split(":");
        conf.port = 地址[1];
        地址=地址[0]；
        路径=“/”+part2.replace(/^\//g,“”);
      } else if (part2.includes(":")) {
        addr = part2.replace(/^\//g, "").split(":");
        conf.port = 地址[1];
        地址=地址[0]；
        路径=“/”+part1.replace(/^\//g,“”);
      } else if (part1.includes(".")) {
        addr = part1.replace(/^\//g, "");
        conf.端口 = 443;
        路径=“/”+part2.replace(/^\//g,“”);
      } 别的 {
        addr = part2.replace(/^\//g, "");
        conf.端口 = 443;
        路径=“/”+part1.replace(/^\//g,“”);
      }
      conf.path = 路径；
    }
    conf.ps =conf?.ps ? conf.ps :conf.名称;
    如果（提供者）{
      conf.ps = 提供商 + "-" + conf.ps;
    }
    conf.ps = conf.ps + "-worker-" + operator.toLocaleLowerCase();
    conf.name = conf.ps;
    conf.host = url.主机名;
    conf.sni = url.主机名;
    如果（IP）{
      conf.add = ip;
    } 别的 {
      conf.add = addressList[Math.floor(Math.random() * addressList.length)];
    }
    if (!conf?.host) {
      conf.host = 地址；
    }
    conf.path = "/" + addr + ":" + conf.port + (conf?.path ? "/" + conf.path.replace(/^\//g, "") : "");
    conf.fp = fpList[Math.floor(Math.random() * fpList.length)];
    conf.alpn = alpnList[Math.floor(Math.random() * alpnList.length)];
    conf.端口 = 443;
    返回配置；
  } 捕获 (e) {
    返回 {};
  }
}
函数 renameConfig(conf, 提供者) {
  尝试 {
    conf.ps =conf?.ps ? conf.ps :conf.名称;
    conf.ps = 提供商 + "-" + conf.ps;
    返回配置；
  } 捕获 (e) {
    返回 {};
  }
}
函数 getMultipleRandomElements(arr, num) {
  var shuffled = [...arr].sort(() => 0.5 - Math.random());
  返回 shuffled.slice(0, num);
}
函数 isIp(str) {
  尝试 {
    if (str == "" || str == void 0)
      返回假；
    if (!/^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])(\.(\d{1,2}|1\ d\d|2[0-4]\d|25[0-5])){2}\.(\d{1,2}|1\d\d|2[0-4]\d| 25[0-4])$/.test(str)) {
      返回假；
    }
    var ls = str.split(".");
    if (ls == null || ls.length != 4 || ls[3] == "0" || parseInt(ls[3]) === 0) {
      返回假；
    }
    返回真；
  } 捕获 (e) {
  }
  返回假；
}
出口 {
  src_default 作为默认值
};
//# sourceMappingURL=index.js.map
