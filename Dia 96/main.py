from pytubefix import YouTube
from pytubefix.cli import on_progress

from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/", methods=["POST"])
def download():
    try:
        data = request.json
        url = data['url']
        yt = YouTube(url, on_progress_callback=on_progress)
        print(yt.title)
        ys = yt.streams.get_audio_only()
        
        if not os.path.exists('./video/'):
            os.makedirs('./video/')
            
        ys.download(output_path='./video/')
        return jsonify({"url": url, "title": yt.title, "status": "Downloaded successfully"})
    
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
     
    app.run(debug=True, port=8089)