package com.easybusiness.utility;

import java.io.IOException;
import java.net.HttpURLConnection;
import java.security.cert.CertificateException;
import java.security.cert.X509Certificate;

import javax.net.ssl.HostnameVerifier;
import javax.net.ssl.HttpsURLConnection;
import javax.net.ssl.SSLContext;
import javax.net.ssl.TrustManager;
import javax.net.ssl.X509TrustManager;

import org.springframework.http.client.SimpleClientHttpRequestFactory;

public class SSLClientHttpRequestFactory extends SimpleClientHttpRequestFactory {

    private final HostnameVerifier verifier;
    private final String cookie;

    public SSLClientHttpRequestFactory(HostnameVerifier verifier, String cookie) {
	this.verifier = verifier;
	this.cookie = cookie;
    }

    @Override
    protected void prepareConnection(HttpURLConnection connection, String httpMethod) throws IOException {
	if (connection instanceof HttpsURLConnection) {
	    ((HttpsURLConnection) connection).setHostnameVerifier(verifier);
	    ((HttpsURLConnection) connection).setSSLSocketFactory(trustSelfSignedSSL().getSocketFactory());
	    ((HttpsURLConnection) connection).setAllowUserInteraction(true);
	    String rememberMeCookie = cookie == null ? "" : cookie;
	    ((HttpsURLConnection) connection).setRequestProperty("Cookie", rememberMeCookie);
	}
	super.prepareConnection(connection, httpMethod);
    }

    public SSLContext trustSelfSignedSSL() {
	try {
	    SSLContext ctx = SSLContext.getInstance("TLS");
	    X509TrustManager tm = new X509TrustManager() {
		public void checkClientTrusted(X509Certificate[] xcs, String string) throws CertificateException {
		    /* ... */

		}

		public void checkServerTrusted(X509Certificate[] xcs, String string) throws CertificateException {
		    /* ... */

		}

		public X509Certificate[] getAcceptedIssuers() {
		    return new X509Certificate[0];
		}
	    };
	    ctx.init(null, new TrustManager[] { tm }, null);
	    SSLContext.setDefault(ctx);
	    return ctx;
	} catch (Exception ex) {
	    ex.printStackTrace();
	}
	return null;
    }

}
