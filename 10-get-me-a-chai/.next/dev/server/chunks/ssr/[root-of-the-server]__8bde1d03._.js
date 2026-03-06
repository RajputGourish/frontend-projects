module.exports = [
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/http2 [external] (http2, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http2", () => require("http2"));

module.exports = mod;
}),
"[externals]/assert [external] (assert, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}),
"[externals]/tty [external] (tty, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[project]/models/Payment.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs, [project]/node_modules/mongoose)");
;
const { Schema, model } = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"];
const PaymentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    to_user: {
        type: String,
        required: true
    },
    oid: {
        type: String,
        required: true
    },
    message: {
        type: String
    },
    amount: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
    done: {
        type: Boolean,
        default: false
    }
});
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].models.Payment || model("Payment", PaymentSchema);
;
}),
"[project]/db/connectDB.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs, [project]/node_modules/mongoose)");
;
const connectDB = async ()=>{
    try {
        const conn = await __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].connect(`mongodb://localhost:27017/chai`);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
};
const __TURBOPACK__default__export__ = connectDB;
}),
"[project]/models/User.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs, [project]/node_modules/mongoose)");
;
const { Schema, model } = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"];
const UserSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    name: {
        type: String
    },
    username: {
        type: String,
        required: true
    },
    profilepic: {
        type: String
    },
    coverpic: {
        type: String
    },
    razorpayid: {
        type: String
    },
    razorpaysecret: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].models.User || model("User", UserSchema);
;
}),
"[project]/actions/useractions.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"40ae85a6b360cc756b58693374329ece0941e9c795":"fetchpayments","40e3364cbf3d2d18c766bafe7191474712687c10ad":"fetchuser","60845642ba9c118724e78b0741b433b8e91997bfb8":"updateProfile","7053d317ffd62adc31fd82bacb7e03c17e4a266568":"initiate"},"",""] */ __turbopack_context__.s([
    "fetchpayments",
    ()=>fetchpayments,
    "fetchuser",
    ()=>fetchuser,
    "initiate",
    ()=>initiate,
    "updateProfile",
    ()=>updateProfile
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$razorpay$2f$dist$2f$razorpay$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/razorpay/dist/razorpay.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$models$2f$Payment$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/models/Payment.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$db$2f$connectDB$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/db/connectDB.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$models$2f$User$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/models/User.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
;
const initiate = async (amount, to_username, paymentform)=>{
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$db$2f$connectDB$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])();
    // fetch the secret of the user who is getting the payment 
    let user = await __TURBOPACK__imported__module__$5b$project$5d2f$models$2f$User$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].findOne({
        username: to_username
    });
    const secret = user.razorpaysecret;
    var instance = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$razorpay$2f$dist$2f$razorpay$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]({
        key_id: user.razorpayid,
        key_secret: secret
    });
    let options = {
        amount: Number.parseInt(amount),
        currency: "INR"
    };
    let x = await instance.orders.create(options);
    // create a payment object which shows a pending payment in the database
    await __TURBOPACK__imported__module__$5b$project$5d2f$models$2f$Payment$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].create({
        oid: x.id,
        amount: amount / 100,
        to_user: to_username,
        name: paymentform.name,
        message: paymentform.message
    });
    return x;
};
const fetchuser = async (username)=>{
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$db$2f$connectDB$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])();
    let u = await __TURBOPACK__imported__module__$5b$project$5d2f$models$2f$User$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].findOne({
        username: username
    });
    let user = u.toObject({
        flattenObjectIds: true
    });
    return user;
};
const fetchpayments = async (username)=>{
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$db$2f$connectDB$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])();
    // find all payments sorted by decreasing order of amount
    let p = await __TURBOPACK__imported__module__$5b$project$5d2f$models$2f$Payment$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].find({
        to_user: username,
        done: true
    }).sort({
        amount: -1
    }).limit(10).lean();
    return JSON.parse(JSON.stringify(p));
};
const updateProfile = async (data, oldusername)=>{
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$db$2f$connectDB$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])();
    let ndata = Object.fromEntries(data);
    if (ndata.username !== oldusername) {
        let u = await __TURBOPACK__imported__module__$5b$project$5d2f$models$2f$User$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].findOne({
            username: ndata.username
        });
        if (u) {
            return {
                error: "Username already exists"
            };
        }
        await __TURBOPACK__imported__module__$5b$project$5d2f$models$2f$User$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].updateOne({
            email: ndata.email
        }, ndata);
        // now update all the username in the payments table
        await __TURBOPACK__imported__module__$5b$project$5d2f$models$2f$Payment$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].updateMany({
            to_user: oldusername
        }, {
            to_user: ndata.username
        });
    } else {
        await __TURBOPACK__imported__module__$5b$project$5d2f$models$2f$User$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].updateOne({
            email: ndata.email
        }, ndata);
    }
};
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    initiate,
    fetchuser,
    fetchpayments,
    updateProfile
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(initiate, "7053d317ffd62adc31fd82bacb7e03c17e4a266568", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(fetchuser, "40e3364cbf3d2d18c766bafe7191474712687c10ad", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(fetchpayments, "40ae85a6b360cc756b58693374329ece0941e9c795", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateProfile, "60845642ba9c118724e78b0741b433b8e91997bfb8", null);
}),
"[project]/.next-internal/server/app/[username]/page/actions.js { ACTIONS_MODULE0 => \"[project]/actions/useractions.js [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$useractions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/actions/useractions.js [app-rsc] (ecmascript)");
;
;
;
}),
"[project]/.next-internal/server/app/[username]/page/actions.js { ACTIONS_MODULE0 => \"[project]/actions/useractions.js [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "40ae85a6b360cc756b58693374329ece0941e9c795",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$useractions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fetchpayments"],
    "40e3364cbf3d2d18c766bafe7191474712687c10ad",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$useractions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fetchuser"],
    "7053d317ffd62adc31fd82bacb7e03c17e4a266568",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$useractions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["initiate"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f5b$username$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$actions$2f$useractions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/[username]/page/actions.js { ACTIONS_MODULE0 => "[project]/actions/useractions.js [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$useractions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/actions/useractions.js [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__8bde1d03._.js.map