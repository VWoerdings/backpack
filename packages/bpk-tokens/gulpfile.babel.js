/*
 * Backpack - Skyscanner's Design System
 *
 * Copyright 2017 Skyscanner Ltd
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import path from 'path';
import _ from 'lodash';
import async from 'async';
import del from 'del';
import gulp from 'gulp';
import jsonLint from 'gulp-jsonlint';
import theo from 'theo';

import bpkScss from './formatters/bpk.scss';
import bpkDefaultScss from './formatters/bpk.default.scss';
import bpkEs6Js from './formatters/bpk.es6.js';
import bpkCommonJs from './formatters/bpk.common.js';
import bpkAndroid from './formatters/bpk.android.xml';

const OUTPUT_MAP = {
  web: [
    'scss',
    'default.scss',
    'raw.json',
    'common.js',
    'es6.js',
  ],
  ios: ['ios.json'],
  android: ['android.xml'],
};

const WEB_OUTPUTS = _(OUTPUT_MAP.web).map(format => ({ transform: 'web', format }));

// Theo config

theo.registerFormat('scss', bpkScss);
theo.registerFormat('default.scss', bpkDefaultScss);
theo.registerFormat('es6.js', bpkEs6Js);
theo.registerFormat('common.js', bpkCommonJs);
theo.registerFormat('android.xml', bpkAndroid);

// Gulp task definitions

gulp.task('clean', () => del(['tokens']));

gulp.task('lint', () => {
  gulp.src('./src/**/*.json')
    .pipe(jsonLint())
    .pipe(jsonLint.reporter())
    .pipe(jsonLint.failAfterError());
});

const makeConverter = platform => (options, done) => {
  let outputPath = 'tokens';

  if (platform === 'ios' || platform === 'android') {
    // For backwards compatibility we output web tokens
    // in the root of `tokens`. Other platforms are scoped in
    // tokens/{platform}
    outputPath = `${outputPath}/${platform}`;
  }


  gulp.src([`./src/${platform}/*.json`])
    .pipe(theo.plugins.transform(options.transform))
    .on('error', done)
    .pipe(theo.plugins.format(options.format))
    .on('error', done)
    .pipe(gulp.dest(path.resolve(__dirname, outputPath)))
    .on('error', done)
    .on('finish', done);
};

gulp.task('tokens', ['clean', 'lint'], (done) => {
  const webConverter = makeConverter('web');

  async.each(WEB_OUTPUTS, webConverter, done);
});

gulp.task('default', ['tokens']);
