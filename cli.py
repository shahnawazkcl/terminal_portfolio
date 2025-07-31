import click

@click.group()
def cli():
    """ Terminal Portfolio Management CLI """
    pass

@cli.command()
def hello():
    """Prints a hello message."""
    click.echo("Hello, welcome to the Terminal Portfolio CLI!")
    
if __name__ == "__main__":
    cli()