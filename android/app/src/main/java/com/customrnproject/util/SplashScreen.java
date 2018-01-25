package com.customrnproject.util;

import android.app.Activity;
import android.app.Dialog;
import android.util.Log;
import android.widget.Toast;

import com.customrnproject.R;

import java.lang.ref.WeakReference;

/**
 * Created by Administrator on 2018/1/22.
 */

public class SplashScreen {
    private static final String TAG = "SplashScreen";
    private static Dialog mSplashDialog;
    private static WeakReference<Activity> mActivity;

    public static void show(final Activity activity, final boolean fullscreen)
    {
        Log.i(TAG, "run: 0");
        if(null == activity){
            return;
        }
        mActivity = new WeakReference<Activity>(activity);
        activity.runOnUiThread(new Runnable() {
            @Override
            public void run() {
                if(!activity.isFinishing())
                {
                    Log.i(TAG, "run: 1");
                    mSplashDialog = new Dialog(activity, fullscreen ? R.style.SplashScreen_Fullscreen : R.style.SplashScreen_SplashTheme);
                    mSplashDialog.setContentView(R.layout.launch_screen);
                    mSplashDialog.setCancelable(false);
                    if(!mSplashDialog.isShowing())
                    {
                        Log.i(TAG, "run: 1-1");
                        mSplashDialog.show();
                    }
                    Log.i(TAG, "run: 2");
                }
            }
        });
    }

    public static void hide(Activity activity)
    {
        if(null == activity)
        {
            activity = mActivity.get();
        }
        if(null == activity)
        {
            return;
        }
        final Activity tmp = activity;
        activity.runOnUiThread(new Runnable() {
            @Override
            public void run() {
                Log.i(TAG, "run: 3");
                Toast.makeText(tmp, "test hide success", 3000).show();
                if(null != mSplashDialog && mSplashDialog.isShowing())
                {
                    mSplashDialog.dismiss();
                }
            }
        });
    }
}
