from flask import Flask, render_template

def create_app():
    app = Flask(__name__, template_folder='templates', static_folder='static')
    
    # import and register the main blueprint
    from app.routes import bp as main_bp
    app.register_blueprint(main_bp) 

    return app

