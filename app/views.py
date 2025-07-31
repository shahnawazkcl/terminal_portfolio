from flask import Blueprint, render_template

main_bp = Blueprint('main', __name__)

@main_bp.route('/')
def index():
    """Serve the terminal-style homepage."""
    return render_template('index.html')

@main_bp.route('/<path:filename>')
def static_files(filename):
    """Proxy static file requests to Flask’s static folder."""
    return main_bp.send_static_file(filename)
