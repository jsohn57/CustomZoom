package com.example.tapzinwebview;

import java.io.IOException;
import java.io.InputStream;

import android.os.Bundle;
import android.app.Activity;
import android.view.Menu;
import android.view.ViewGroup;
import android.view.WindowManager.LayoutParams;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.Color;

public class MainActivity extends Activity {

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		//setContentView(R.layout.activity_main);
		
		CustomZoomableLayout zoomLayout = new CustomZoomableLayout(this);
		zoomLayout.setBackgroundColor(Color.BLUE);
		
		ImageView mImageView = new ImageView(this);
		LayoutParams params = new LayoutParams(LayoutParams.MATCH_PARENT, LayoutParams.MATCH_PARENT);
		mImageView.setLayoutParams(params);
		try {
			InputStream isr = getAssets().open("A1.png");
			Bitmap bitmap = BitmapFactory.decodeStream(isr);
			mImageView.setImageBitmap(bitmap);
		} catch (IOException e){
			e.printStackTrace();
		}
		
		zoomLayout.addView(mImageView);
		CustomWebView tapzinWebView = new CustomWebView(this);
		//tapzinWebView.setLayoutParams(new LinearLayout.LayoutParams(50, 100));
		tapzinWebView.setLayoutParams(new LinearLayout.LayoutParams(LayoutParams.WRAP_CONTENT, LayoutParams.WRAP_CONTENT));
		zoomLayout.addView(tapzinWebView);
		tapzinWebView.setInitialScale(100);

		WebSettings set = tapzinWebView.getSettings();
		set.setJavaScriptEnabled(true);
		set.setBuiltInZoomControls(true);
		
		tapzinWebView.loadUrl("file:///android_asset/ARI_01.html");
		
		params = new LayoutParams(LayoutParams.MATCH_PARENT, LayoutParams.MATCH_PARENT);
		setContentView(zoomLayout, params);
	}

	@Override
	public boolean onCreateOptionsMenu(Menu menu) {
		// Inflate the menu; this adds items to the action bar if it is present.
		getMenuInflater().inflate(R.menu.main, menu);
		return true;
	}

}
