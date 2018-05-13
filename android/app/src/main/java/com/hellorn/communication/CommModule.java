package com.hellorn.communication;


import android.widget.Toast;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;

import org.json.JSONException;
import org.json.JSONObject;

import java.util.HashMap;
import java.util.Map;

import javax.annotation.Nullable;

/**
 * 与JS通信模块
 * Created by zxg on 2018/5/13.
 */

public class CommModule extends ReactContextBaseJavaModule {
    private ReactApplicationContext mContext;
    private static final String MODULE_NAME = "COMM_MODULE";
    public static final String DURATION_LONG_KEY = "LONG_1";
    private static final String DURAIONT_SHORT_KEY = "SHORT_1";

    private static final String ACTION_TAOST = "NATIVE_TOAST";

    public CommModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.mContext = reactContext;
    }

    @Override
    public String getName() {
        return MODULE_NAME;
    }

    /**
     * 通过注解@ReactMethod定义方法，在JS中调用并可以使用Callback方式回传结果；可使用getConstants()
     * 中put的常量
     *
     * @param message
     * @param duration SimpleDemo:showToast
     */
    @ReactMethod
    public void showNativeToast(String message, Integer duration,Callback callback) {
        Toast.makeText(mContext, message, duration).show();
        callback.invoke("toast success");
    }

    /**
     * 若所有方法都像showNativeToast()一样直接调业务方法，那我们需要在通信模块中写很多具体业务方法
     * 这里，我们封装通用方法，通过Json定义通信协议来传递RN调用具体哪个native业务
     * Json协议：{'action':'toast','args':{'duration:',1,'message':'msg from js'}}
     * 这条协议表明动作是toast，内容是msg from js,时长是1
     */
    @ReactMethod
    public void rnCallNativeWithCallback(String json, Callback callback) {
        try {
            JSONObject jsonObject = new JSONObject(json);
            String action = jsonObject.getString("action");
            if (ACTION_TAOST.equals(action)) {
                JSONObject jsonArgs = jsonObject.getJSONObject("args");
                Integer duration = jsonArgs.getInt("duraion");
                String message = jsonObject.getString("message");
                String result = callNativeToast(message, duration);
                callback.invoke(result);
            }
        } catch (JSONException e) {
            e.printStackTrace();
        }
    }

    /**
     * 调用业务方法，该处应该调用业务模块方法，例如：ToastModule.showToast()，
     * 而非直接编写业务逻辑。为了方便先这样写
     * @return
     */
    private String callNativeToast(String message, Integer duration) {
        Toast.makeText(getReactApplicationContext(), message, duration).show();
        return "toast success!";
    }

    /**
     * JS可访问constants的中put常量，注意，在JS中使用时需调用字串值LONG_1,
     * 而非定义的DURATION_LONG_KEY
     * @return
     */
    @Override
    public Map<String, Object> getConstants() {
        final Map<String, Object> constants = new HashMap<>();
        constants.put(DURATION_LONG_KEY, Toast.LENGTH_LONG);
        constants.put(DURAIONT_SHORT_KEY, Toast.LENGTH_SHORT);
        return constants;
    }

    /**
     * native发送事件，js中通过addListener.(eventName)来监听
     * 间接实现native调用js
     * @param eventName
     * @param params
     */
    private void sendEvent(String eventName, WritableMap params){
        mContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class).emit(eventName,params);
    }

    /**
     * 由于接收UI操作在JS层，我们无法在native中触发native对js的调用
     * 这里我们通过ReactMethod方式接收js对UI的响应，测试native对js的调用，实际开发中没有必要这样干
     */
    @ReactMethod
    public void triggerNativeCallRN(){
        WritableMap params = Arguments.createMap();
        params.putString("key1","value1");
        params.putString("key2","value2");
        sendEvent("NativeCallJS",params);
    }

    @ReactMethod
    public void triggerNativeCallbackJSWithPromise(Promise promise){
        //根据action处理业务逻辑
        try{
            String tn = Thread.currentThread().getName();
            //成功回调
            promise.resolve(tn);
        }catch (Exception e){
            //失败回调
            promise.reject("error");
        }


    }
}
