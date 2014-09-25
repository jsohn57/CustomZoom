package com.example.tapzinwebview;

import android.content.Context;
import android.graphics.Canvas;
import android.util.AttributeSet;
import android.webkit.WebView;

public class CustomWebView extends WebView {

	public CustomWebView(Context context) {
		super(context);
		// TODO Auto-generated constructor stub
	}

	public CustomWebView(Context context, AttributeSet attrs) {
		super(context, attrs);
		// TODO Auto-generated constructor stub
	}

	public CustomWebView(Context context, AttributeSet attrs, int defStyle) {
		super(context, attrs, defStyle);
		// TODO Auto-generated constructor stub
	}
	
	@Override
	protected void onMeasure(int widthMeasureSpec, int heightMeasureSpec) {
		
	    int widthMode = MeasureSpec.getMode(widthMeasureSpec);
	    int widthSize = MeasureSpec.getSize(widthMeasureSpec);

	    int heightMode = MeasureSpec.getMode(heightMeasureSpec);
	    int heightSize = MeasureSpec.getSize(heightMeasureSpec);

	    float parentScale = ((CustomZoomableLayout)getParent()).getScaleFactor();
	    int chosenWidth, chosenHeight;
	    if( parentScale > 1.0f){
	        chosenWidth =  (int) ( parentScale * (float)getWidth() );
	        chosenHeight = (int) ( parentScale * (float)getHeight() );
	    }
	    else{
	        chosenWidth =  (int) (  (float)getWidth() );
	        chosenHeight = (int) (  (float)getHeight() );          
	    }

	    setMeasuredDimension(chosenWidth, chosenHeight);
	}

	/*
	@Override
	protected void onDraw(Canvas canvas){
		canvas.save(Canvas.MATRIX_SAVE_FLAG);
		canvas.scale(((CustomZoomableLayout)getParent()).getScaleFactor(), ((CustomZoomableLayout)getParent()).getScaleFactor());
		canvas.restore();
	}
	*/
	
}
