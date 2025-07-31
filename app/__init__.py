from flask import Flask, render_template, send_from_directory
import os

def create_app():
    app = Flask(__name__, static_folder='static', template_folder='templates')

    # Register routes
    from .views import main_bp
    app.register_blueprint(main_bp)

    return app
