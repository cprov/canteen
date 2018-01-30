from setuptools import (
    find_packages,
    setup,
)

setup(
    name='canteen',
    version='0.1',
    author='Celso Providelo',
    author_email='celso.providelo@canonical.com',
    url='http://pypi.python.org/pypi/canteen/',
    license='LICENSE',
    description='Minimalist Python (flask) web application setup using React.',
    packages=find_packages(),
    install_requires=[
        "Flask==0.12.2",
        "talisker[flask]==0.9.5",
    ],
    test_suite='tests',
)
